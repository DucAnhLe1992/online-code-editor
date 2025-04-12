import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

interface LocalApiError {
  code: string;
}

const defaultCells: Cell[] = [
  {
    id: "100",
    type: "text",
    content: "Your text here",
  },
  {
    id: "101",
    content: `
    import { useState } from 'react';

    const App = () => {
      const [height, setHeight] = useState(0);
      const [weight, setWeight] = useState(0);
      const [bmi, setBmi] = useState(0);

      const conclusion = (result) => {
        if (result === 0 || result === Infinity) return 'not evaluated yet';
        if (result < 16) return 'severely thin';
        if (result <= 17) return 'moderately thin';
        if (result <= 18.5) return 'slightly thin';
        if (result <= 25) return 'normal';
        if (result <= 30) return 'overweight';
        if (result <= 35) return 'class 1 obese';
        if (result <= 40) return 'class 2 obese';
        return 'class 3 obese';
      };

      return (
        <>
          <h1>BMI Calculator</h1>
          <hr />
          <form>
            <div>
              Height:{' '}
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />{' '}
              m.
            </div>
            <div>
              Weight:{' '}
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />{' '}
              kg.
            </div>
            <hr />
            <button onClick={() => setBmi(weight / (height * height))}>
              Calculate
            </button>
            <hr />
            <div>
              Your BMI is{' '}
              {bmi || bmi === Infinity
                ? bmi.toFixed(2)
                : 'not yet calculated correctly'}
              .
              <br />
              You are {conclusion(bmi)}.
            </div>
          </form>
        </>
      );
    };

    // use show() function to show the component, or any other values
    show(<App />);
  `,
    type: "code",
  },
];

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());
  const fullPath = path.join(dir, filename);

  router.get("./cells", async (req, res) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };

    try {
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });
      res.send(JSON.parse(result));
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === "ENOENT") {
          await fs.writeFile(fullPath, `${JSON.stringify(defaultCells)}`, "utf-8");
          res.send(defaultCells);
        }
      } else {
        throw err;
      }
    }
  });

  router.post("./cells", async (req, res) => {
    const { cells }: { cells: Cell[] } = req.body;
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");
    res.send({ status: "cells saved" });
  });

  return router;
};

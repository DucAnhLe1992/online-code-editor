import path from "path";
import { Command } from "commander";
import { serve } from "@bundle-notebook/local-api";

const isProduction = process.env.NODE_ENV === "production";

interface LocalApiError {
  code: string;
}

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Enter a filename to either load previously saved data,\nor start saving your progress (default: \"notebook.js\")")
  .option("-p, --port <number>", "port to run server on", "4000")
  .action(async (filename = "notebook.js", options: { port: string }) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };

    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction
      );
      console.log(
        `Please proceed to http://localhost:${options.port} to start using the app!`
      );
    } catch (err) {
      if (isLocalApiError(err)) {
        if (err.code === "EADDRINUSE") {
          console.error("Port is in use. Try running on a different port.");
        }
      } else if (err instanceof Error) {
        console.log("Here's the problem", err.message);
      }
      process.exit(1);
    }
  });

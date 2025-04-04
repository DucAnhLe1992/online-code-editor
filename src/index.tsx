import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bulmaswatch/superhero/bulmaswatch.min.css";

import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import { store } from "./state";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
        {/* <CodeCell /> */}
      </div>
    </Provider>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(<App />);

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import CellList from "./components/CellList";
import { store } from "./state";

const App = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(<App />);

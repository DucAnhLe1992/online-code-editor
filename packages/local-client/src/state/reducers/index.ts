import { combineReducers } from "redux";
import CellsReducer from "./cellsReducer";
import BundlesReducer from "./bundlesReducer";

const reducers = combineReducers({
  cells: CellsReducer,
  bundles: BundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

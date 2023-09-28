import { combineReducers } from "redux";
import { positionReduser } from "./position/position-reduser";
import { filterReduser } from "./filters/filter-reduser";

export const rootReducer = combineReducers({
  position: positionReduser,
  filters: filterReduser,
});

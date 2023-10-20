import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import postReducer from "./posts/reducer";
import countryReducer from "./country-list/reducer";

export default combineReducers({
  user: userReducer,
  post: postReducer,
  country: countryReducer,
});

import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { answerSlice } from "../features/answerSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  answer: answerSlice.reducer,
});

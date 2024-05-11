import {applyMiddleware, combineReducers, createStore} from "redux";
import starredBoardReducer from "./reducer/starredBoardReducer";
import workspaceReducer from "./reducer/workspaceReducer";
import {thunk} from "redux-thunk";

const store = createStore(combineReducers({
  starredBoards: starredBoardReducer,
  workspaces: workspaceReducer
}), applyMiddleware(thunk))

export default store

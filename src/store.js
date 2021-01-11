import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./reducers/pokemon-reducer";

const middlewares = [thunk];
export const store = createStore(
  pokemonReducer,
  applyMiddleware(...middlewares)
);

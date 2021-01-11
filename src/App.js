import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import PokemonContainer from "./containers/PokemonContainer";

const App = () => (
  <Provider store={store}>
    <PokemonContainer />
  </Provider>
);

export default App;

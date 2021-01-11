import WEB_API from "../api/pokemonApi";
import {
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_RANDOM_POKEMON_REQUEST,
  FETCH_RANDOM_POKEMON_SUCCESS,
  FETCH_RANDOM_POKEMON_FAILURE,
} from "./actionTypes";

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POKEMONS_REQUEST });
    return Promise.all([
      fetch(WEB_API.Bulbasaur),
      fetch(WEB_API.Charmander),
      fetch(WEB_API.Squirtle),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        // console.log(data);
        dispatch({ type: FETCH_POKEMONS_SUCCESS, data });
      })
      .catch((error) => {
        // console.log(error);
        dispatch({ type: FETCH_POKEMONS_FAILURE, error });
      });
  };
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const fetchRandomPokemon = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_RANDOM_POKEMON_REQUEST });
    return Promise.all([fetch(`${WEB_API.Random}${getRndInteger(11, 800)}`)])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        // console.log(data);
        dispatch({ type: FETCH_RANDOM_POKEMON_SUCCESS, data });
      })
      .catch((error) => {
        // console.log(error);
        dispatch({ type: FETCH_RANDOM_POKEMON_FAILURE, error });
      });
  };
};

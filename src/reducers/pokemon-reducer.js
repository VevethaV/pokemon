import {
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_RANDOM_POKEMON_REQUEST,
  FETCH_RANDOM_POKEMON_SUCCESS,
  FETCH_RANDOM_POKEMON_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  pokemons: [],
};

export const pokemonReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.data,
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        pokemons: [],
      };
    case FETCH_RANDOM_POKEMON_REQUEST:
      return {
        ...state,
      };
    case FETCH_RANDOM_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.data],
      };
    case FETCH_RANDOM_POKEMON_FAILURE:
      return {
        ...state,
        pokemons: [...state.pokemons],
      };
    default:
      return state;
  }
};

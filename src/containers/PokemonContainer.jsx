import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPokemons, fetchRandomPokemon } from "../actions/pokemonActions";
import PokemonComponent from "../components/PokemonComponent";

const PokemonContainer = ({ fetchPokemons, pokemons, randomPokemon }) => {
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);
  return (
    <Fragment>
      <PokemonComponent pokemons={pokemons} randomPokemon={randomPokemon} />
    </Fragment>
  );
};

PokemonContainer.propTypes = {
  fetchPokemons: PropTypes.func,
  pokemons: PropTypes.array,
  randomPokemon: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    randomPokemon: () => dispatch(fetchRandomPokemon()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);

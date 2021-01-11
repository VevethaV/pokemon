import React, { Fragment, Suspense } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
const PokemonCard = React.lazy(() => import("./PokemonCard"));

const useStyles = makeStyles({
  loader: {
    textAlign: "right",
  },
});

const PokemonComponent = ({ pokemons, randomPokemon }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header randomPokemon={randomPokemon} />
      <Grid container justify="center">
        <Grid item md={9}>
          <Suspense
            fallback={
              <div className={classes.loader}>
                <img
                  src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                  alt="loder"
                />
              </div>
            }
          >
            <Grid container spacing={3}>
              {pokemons.length > 0 &&
                pokemons.map((each, i) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                      <PokemonCard info={each} />
                    </Grid>
                  );
                })}
            </Grid>
          </Suspense>
        </Grid>
      </Grid>
    </Fragment>
  );
};

PokemonComponent.propTypes = {
  pokemons: PropTypes.array,
  randomPokemon: PropTypes.func,
};

export default PokemonComponent;

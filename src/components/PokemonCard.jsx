import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
  id: {
    paddingBottom: 14,
  },
  bg: {
    backgroundColor: "#30a7d7",
    borderRadius: 5,
  },
  property: {
    color: "#fff",
  },
  value: {
    textTransform: "capitalize",
    paddingTop: 3,
    color: "#212121",
    fontWeight: 600,
  },
});

const PokemonCard = ({ info }) => {
  const classes = useStyles();
  return (
    <Card elevation={5}>
      <CardContent>
        <div className={classes.center}>
          <img src={info.sprites.front_default} alt={info.name} />
          <div className={classes.id}>#{info.id}</div>
        </div>
        <Grid container className={classes.bg} spacing={2}>
          <Grid item xs={6} md={6}>
            <div className={classes.property}>Name</div>
            <div className={classes.value}>{info.name}</div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className={classes.property}>Base Exp.</div>
            <div className={classes.value}>{info.base_experience}</div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className={classes.property}>Height</div>
            <div className={classes.value}>{info.height}</div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className={classes.property}>Weight</div>
            <div className={classes.value}>{info.weight}</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PokemonCard.propTypes = {
  info: PropTypes.object,
};

export default PokemonCard;

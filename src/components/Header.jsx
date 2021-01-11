import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#30a7d7",
  },
  toolbar: {
    minHeight: 75,
  },
  flexGrow: {
    flexGrow: 1,
  },
  btn: {
    textTransform: "capitalize",
    backgroundColor: "#fff",
    color: "#30a7d7",
    marginBottom: 12,
    float: "right",
    "&:hover": {
      backgroundColor: "#30a7d7",
      color: "#fff",
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header({ randomPokemon, ...props }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.flexGrow}>
              Pokemon List
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={randomPokemon}
            >
              Random Pokemon
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  );
}

Header.propTypes = {
  randomPokemon: PropTypes.func,
};

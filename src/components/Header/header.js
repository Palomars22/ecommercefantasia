import { Container, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 70,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  cart: {
    marginRight: 60,
  },
  top: {
    //
    background: "#000",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" className={classes.top}>
          <Toolbar>
            <Typography variant="h2" className={classes.title}>
              Ecommerce 2022
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}

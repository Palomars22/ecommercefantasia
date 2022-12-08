import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 70,
    background: "#000",
  },
  title: {    
    textAlign: "center",
    color: "#fff",
    paddingTop: 20,
  },

 
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h6" className={classes.title}>
         Ecommerce 2022
      </Typography>
    </Container>
  );
}

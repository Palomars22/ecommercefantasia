import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import CardShop from "components/CardShop/cardShop";
import Cart from "components/Cart/cart";
const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  boxCart: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: "#fff",
    textAlign: "center",
  },
}));

export default function Templates() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6} md={8}>
            <Box className={classes.box}>
              <h1>Lançamentos 2022</h1>
              <CardShop />
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box className={classes.boxCart}>
              <div>
                <h1>Carrinho</h1>
                <Cart />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

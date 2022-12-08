import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addReserve, deleteReserve } from '../../store/modules/reserve/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 10,
    maxWidth:400,
    maxHeight:175,
    margin: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: 160,
    width: 112,
    margin: "0 auto",
  },
  title: {
    textAlign: "left",
    margin: "5px 0px",
  },
  boxCart: {
    borderRadius: 6,
    marginTop: 30,
    padding: 10,
    background: "#000",
  },
}));

export default function Cart() {
  const classes = useStyles();
  const dispath = useDispatch();
  const reserves = useSelector((state) => state.reserve);
  let sum = 0;
  const finalvalue = useSelector((state) => {
    const allPrices = state.reserve.map((item) => item.amount * item.price);
    sum = allPrices.reduce((prevVal, elem) => prevVal + elem, 0);
  });

  const handleAdd = (item) => {
    dispath(addReserve(item));
  };
  const handleDelete = (id) => {
    dispath(deleteReserve(id));
  };
  return (
    <Container className={classes.boxCart}>
      {reserves.map((item) => (
        <Card className={classes.root} key={item.id}>
          <CardMedia
            className={classes.cover}
            image={item.image}
            title="Modelos camisetas "
          />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.title}>
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.title}
              >
                <strong>Preço :</strong> {`R$ ${item.price} , 00`}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.title}
              >
                <strong> Total item: </strong> <br/>{`R$ ${item.total} , 00`}
              </Typography>
            </CardContent>

            <div className={classes.content}>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleAdd(item)}
                >
                  <AddCircleOutlineIcon />
                </Button>{" "}
                {item.amount}
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleDelete(item.id)}
                >
                  {" "}
                  <RemoveCircleOutlineIcon />{" "}
                </Button>
              </CardActions>
            </div>
          </div>
        </Card>
      ))}

      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <ShoppingCartIcon /> R$ {sum} ,00
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addReserve, deleteReserve } from '../../store/modules/reserve/actions';

const useStyles = makeStyles({
  root: {
    width: 190,
    padding: 15,
    margin: "5px auto",
  },
  bullet: {
    display: "inline-block",
    margin: "8px 4px",
    transform: "scale(0.8)",
  },
  media: {
    height: 190,
    textAlign: "center",
  },
  content: {
    textAlign: "left",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
  },
});

export default function CardShop() {
  const classes = useStyles();
  const dispath = useDispatch();
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    axios.get("http://localhost:3333/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleAdd = (item) => {
    dispath(addReserve(item));
  };
  const handleDelete = (id) => {
    dispath(deleteReserve(id));
  };
  return (
    <Container>
      <Grid container>
        {products.map((item) => (
          <Grid item xs={12} md={4}>
            <Card className={classes.root} key={item.id}>
              <CardActionArea>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {item.name}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.content}
                  >
                    <strong>Descrição : </strong> {item.description}
                    <br />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.content}
                  >
                    <strong> Preço : </strong> {`R$ ${item.price} ,00`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleAdd(item)}
                >
                  <AddCircleIcon />
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteForeverIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Country_card(props) {
  return (
    <Card sx={{ maxWidth: 345, width :200}}>
      <CardMedia
      component='img'
      alt={props.name}
      image = {props.flagurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.capital} | {props.population}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

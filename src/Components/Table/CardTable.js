import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '40px',
    marginLeft : '20px',
    marginRight : '20px',
  },
  media: {
    height: 140,
    
    
  },
  link: {
    textDecoration : 'none',
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        
          <Link to = {`/${props.link}`} className={classes.link}>
          <Button size="medium" color="primary"> Перейти</Button>
          </Link>
        
       
      </CardActions> */}
    </Card>
  );
}

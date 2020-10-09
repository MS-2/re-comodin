import React from 'react'
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection:"column",
    alignItems:"center",
    '& > .cubo': {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
      margin: theme.spacing(2),
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  },
}));

function IconButtonLink(props) {
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Paper style={{backgroundColor:props.color}} className={'cubo'} elevation={3} onClick={props.onclick} >
        <Link to={props.to}>{props.icono}</Link>
      </Paper>
      <p>{props.text}</p>
      </div>
    );
  }

export default IconButtonLink;
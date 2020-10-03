import React, { useContext, useState, useEffect } from 'react'
import {ContextUser} from '../../contextos/userContext'
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch
  } from "react-router-dom";
import {Settings,DollarSign,Calendar,Edit,CreditCard,Clipboard,Shield,Coffee,Volume1,BarChart2,Gift } from 'react-feather';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', 
    '& > .cubo':{
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      flexWrap:"wrap",
      margin: theme.spacing(3),
      width: theme.spacing(9),
      height: theme.spacing(9),
    },

  },
}));


const CustomLink = () => {

const user = useContext(ContextUser);
const classes = useStyles();

return (

( <div className={classes.root}>

        <IconButtonLink />

  </div> ) 

    
  )
}
function IconButtonLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
    // console.log("mat",match)
    return (
      <Paper className="cubo" elevation={3}>
        <Link to={to}>{<DollarSign ></DollarSign>}</Link>
      </Paper>
    );
  }

export {CustomLink, IconButtonLink} ;
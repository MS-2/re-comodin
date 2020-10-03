import React, { useContext, useState, useEffect } from 'react'
import {ContextUser} from '../../contextos/userContext'
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Settings,DollarSign,Calendar,Edit,CreditCard,Clipboard,Shield,Coffee,Volume1,BarChart2,Gift } from 'react-feather';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MiniH from '../header/miniHeader';
import {CustomLink,IconButtonLink} from '../customLink/customLink';


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
  // new:{
  //   backgroundColor:"whitesmoke",
  //   position:"fixed",
  //   width:100+"%",
  //   maxWidth:100+"%",
  //   display:"flex",
  //   justifyContent:"center",
  // }
  }));


const Main = () => {

const user = useContext(ContextUser);
const classes = useStyles();

return (

( <div className={classes.root} >

  {/* <MiniH text="semana"></MiniH>
  <div style={{display:"flex",maxWidth:100+"%", maxHeight:30, justifyItems:"stretch"}}>
    <p>maq recaudadas</p>

    <input type="date"></input>
  </div>
  <MiniH text="operaciones"></MiniH> */}

    {/* <Link to="/asd" component={CustomLink}></Link> */}
    <IconButtonLink to="/recaudaciones"></IconButtonLink>
    <IconButtonLink to="/hola"></IconButtonLink>
    <IconButtonLink to="/new"></IconButtonLink>
    <Paper className="cubo" style={{backgroundColor:"yellow"}} elevation={3} onClick={()=>console.log("asdd") }>
      <DollarSign ></DollarSign>
    </Paper>

    <Paper className="cubo" style={{backgroundColor:"yellow"}} elevation={3}><Edit ></Edit></Paper>
    <Paper className="cubo" style={{backgroundColor:"yellow"}} elevation={3}><Calendar ></Calendar></Paper>
  <MiniH text="cierres"></MiniH>
    <Paper className="cubo" style={{backgroundColor:"orange"}} elevation={3}><CreditCard  ></CreditCard></Paper>
    <Paper className="cubo" style={{backgroundColor:"orange"}} elevation={3}><Clipboard  ></Clipboard></Paper>
    <Paper className="cubo" style={{backgroundColor:"orange"}} elevation={3}><Shield  ></Shield></Paper>
  <MiniH text="servicios"></MiniH>
    <Paper className="cubo" style={{backgroundColor:"pink"}} elevation={3}><Settings  ></Settings></Paper>
    <Paper className="cubo" style={{backgroundColor:"pink"}} elevation={3}><Coffee  ></Coffee></Paper>
    <Paper className="cubo" elevation={3}><Volume1  ></Volume1></Paper>
  <MiniH text="informes"></MiniH>
    <Paper className="cubo" style={{backgroundColor:"grey"}} elevation={3}><Gift  ></Gift></Paper>
    <Paper className="cubo" style={{backgroundColor:"grey"}} elevation={3}><BarChart2  ></BarChart2></Paper>

  </div> ) 

    
  )
}

export default Main;
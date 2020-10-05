import React, {useContext} from 'react';
import {ContextUser} from './contextos/userContext';
import {Container} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Settings,DollarSign,Calendar,Edit,CreditCard,Clipboard,Shield,Coffee,Volume1,BarChart2,Gift } from 'react-feather';
import HomePage from './componentes/home/HomePage';
import Header from './componentes/header/header';
import FooterTabs from './componentes/footerTabs/footerTabs';
import MiniH from './componentes/header/miniHeader';
import IconButtonLink  from './componentes/customLink/customLink';
import Reca from './componentes/formularios/reca';
import Libro from './componentes/formularios/libro';
import Gastos from './componentes/formularios/gastos';
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
      margin: theme.spacing(2),
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  },
  }));

function App() {
  const user = useContext(ContextUser);
  const classes = useStyles();
  console.log(user)
  return (
    !user.isAuth ? 
      (<BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <Header></Header>
          <HomePage></HomePage>
        </Route>
      </BrowserRouter>)
      // ---------------++++++++++++++++++++++++++++++++
            : //este es la division entre el login y el auth
      //----------------++++++++++++++++++++++++++++++++
      (<BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <Header></Header>  
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/recaudaciones" icono={<DollarSign></DollarSign>}></IconButtonLink>
              <IconButtonLink to="/libro" icono={<Edit></Edit>}></IconButtonLink>
              <IconButtonLink to="/calendario" icono={<Calendar></Calendar>}></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/depositos" icono={<CreditCard></CreditCard>}></IconButtonLink>
              <IconButtonLink to="/nuevo" icono={<Clipboard></Clipboard>}></IconButtonLink>
              <IconButtonLink to="/calendario" icono={<Shield></Shield>}></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/calendario" icono={<Settings></Settings>}></IconButtonLink>
              <IconButtonLink to="/calendario" icono={<Coffee></Coffee>}></IconButtonLink>
              <IconButtonLink to="/calendario" icono={<Volume1></Volume1>}></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/calendario" icono={<Gift></Gift>}></IconButtonLink>
              <IconButtonLink to="/calendario" icono={<BarChart2></BarChart2>}></IconButtonLink>
            </Container>
          <MiniH text="semana final"></MiniH> 
          <FooterTabs></FooterTabs>
        </Route>

{/* RECA */}
        <Switch>
          <Route path="/recaudaciones">
            <Header></Header>  
            <Reca />
            <FooterTabs></FooterTabs>
          </Route>
{/* LIBRO */}
          <Route path="/libro">
            <Header></Header>  
            <MiniH text="semana x"></MiniH> 
            <div style={{minHeight:100+"vh"}}>
            <Container className={classes.root}>
              <IconButtonLink to="/devoluciones" icono={<Coffee></Coffee>}></IconButtonLink>
              <IconButtonLink to="/prestamos" icono={<Coffee></Coffee>}></IconButtonLink>
              <IconButtonLink to="/gastos" icono={<Coffee></Coffee>}></IconButtonLink>
            </Container>
            </div>
            <FooterTabs></FooterTabs>
          </Route>
{/* GASTOS */}
          <Route path="/gastos">
            <Header></Header>  
            <Gastos />
            <FooterTabs></FooterTabs>
          </Route>
        </Switch>
      </BrowserRouter> )

  );
}


  

export default App;




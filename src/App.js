import React, { useContext } from 'react';
import { ContextUser } from './contextos/userContext';
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Settings, DollarSign, Calendar, Edit, CreditCard, Clipboard, Shield, Coffee, Volume1, BarChart2, Gift } from 'react-feather';
import HomePage from './componentes/home/HomePage';
import Header from './componentes/header/header';
import FooterTabs from './componentes/footerTabs/footerTabs';
import MiniH from './componentes/header/miniHeader';
import IconButtonLink from './componentes/customLink/customLink';
import Reca from './componentes/formularios/reca';
import Devoluciones from './componentes/formularios/devoluciones';
import Gastos from './componentes/formularios/gastos';
import Depositos from './componentes/formularios/depositos';
import Resumen from './componentes/formularios/resumen';
import Buscador from './componentes/formularios/buscador';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
            <IconButtonLink text="Recaudaciones" color='#F8DC27'  to="/recaudaciones" icono={<DollarSign color="black"></DollarSign>}></IconButtonLink>
            <IconButtonLink text="Libro Diario" color='#F8DC27' to="/libro" icono={<Edit color="black"></Edit>}></IconButtonLink>
            <IconButtonLink text="Calendario" color='#F8DC27' to="/calendario" icono={<Calendar color="black"></Calendar>}></IconButtonLink>
          </Container>
          <MiniH text="semana x"></MiniH>
          <Container className={classes.root}>
            <IconButtonLink text="Depositos" color='#E5B63A' to="/depositos" icono={<CreditCard color="black"></CreditCard>}></IconButtonLink>
            <IconButtonLink text="Planilla Resumen" color='#E5B63A' to="/resumen" icono={<Clipboard color="black"></Clipboard>}></IconButtonLink>
            <IconButtonLink text="Auditorias" color='#E5B63A' to="/auditorias" icono={<Shield color="black"></Shield>}></IconButtonLink>
          </Container>
          <MiniH text="semana x"></MiniH>
          <Container className={classes.root}>
            <IconButtonLink text="Servicio Tecnico" color='#AF2C2F' to="/calendario" icono={<Settings color="black"></Settings>}></IconButtonLink>
            <IconButtonLink text="Sugerencias"  color='#AF2C2F' to="/calendario" icono={<Coffee color="black"></Coffee>}></IconButtonLink>
            <IconButtonLink text="DenunciasPY" to="/calendario" icono={<Volume1 color="black"></Volume1>}></IconButtonLink>
          </Container>
          <MiniH text="semana x"></MiniH>
          <Container className={classes.root}>
            <IconButtonLink text="Mis Ingresos" to="/calendario" color='black' icono={<Gift color="white"></Gift>}></IconButtonLink>
            <IconButtonLink text="Dashboard" to="/calendario" color='black' icono={<BarChart2 color="white"></BarChart2>}></IconButtonLink>
          </Container>
          <FooterTabs></FooterTabs>
        </Route>

        {/* RECA */}
        <Switch>
          <Route path="/recaudaciones">
            <Header></Header>
            <Reca />
            <FooterTabs></FooterTabs>
          </Route>
          {/* |||||||| */}
          {/* LIBRO */}
          <Route path="/libro">
            <Header></Header>
            <MiniH text="semana x"></MiniH>
            <div style={{ minHeight: 100 + "vh" }}>
              <Container className={classes.root}>
                <IconButtonLink to="/devoluciones" icono={<Coffee></Coffee>}></IconButtonLink>
                <IconButtonLink to="/prestamos" icono={<Coffee></Coffee>}></IconButtonLink>
                <IconButtonLink to="/gastos" icono={<Coffee></Coffee>}></IconButtonLink>
              </Container>
            </div>
            <FooterTabs></FooterTabs>
          </Route>
          {/* |||||||| */}
          {/* GASTOS */}
          <Route path="/gastos">
            <Header></Header>
            <Gastos />
            <FooterTabs></FooterTabs>
          </Route>
              {/* |||||||| */}
          {/* GASTOS */}
          <Route path="/devoluciones">
            <Header></Header>
            <Devoluciones />
            <FooterTabs></FooterTabs>
          </Route>
          {/* |||||||| */}
          {/* DEPOSITOS */}
          <Route path="/depositos">
            <Header></Header>
            <MiniH text="semana x"></MiniH>
            <Depositos />
            <FooterTabs></FooterTabs>
          </Route>
          {/* |||||||| */}
          {/* RESUMEN */}
          <Route path="/resumen">
            <Header></Header>
            <Resumen />
            <MiniH text="resumen recaudaciones"></MiniH>
            <Buscador />
            <FooterTabs></FooterTabs>
          </Route>
          {/* |||||||| */}
        </Switch>
      </BrowserRouter>)

  );
}




export default App;




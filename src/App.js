import React, {useContext} from 'react';
import {ContextUser} from './contextos/userContext';
import {BrowserRouter, Route,Link,Switch} from "react-router-dom";
import HomePage from './componentes/home/HomePage';
import Header from './componentes/header/header';
import FooterTabs from './componentes/footerTabs/footerTabs';
import { Container } from 'react-bootstrap';
import MiniH from './componentes/header/miniHeader';
import { IconButtonLink } from './componentes/customLink/customLink';
import { makeStyles } from '@material-ui/core/styles';
import Recaudaciones from './componentes/formularios/recaudaciones';
import Reca from './componentes/formularios/reca';

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
              <IconButtonLink to="/a"></IconButtonLink>
              <IconButtonLink to="/recaudaciones"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
            </Container>
          <MiniH text="semana x"></MiniH> 
            <Container className={classes.root}>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
              <IconButtonLink to="/nuevo"></IconButtonLink>
            </Container>
          <MiniH text="semana final"></MiniH> 

          <FooterTabs></FooterTabs>
        </Route>
        <Switch>

          <Route path="/recaudaciones">
            <Reca />
          </Route>

        </Switch>
      </BrowserRouter> )

  );
}


  

export default App;





      {/* <HomePage></HomePage> */}



      // return (


      //   !user.isAuth ? 
        
      //   (   <Container>
      //           <Image src={logo} fluid />
      //           <Form onSubmit={handleSubmit}>
      //               <Form.Group controlId="email">
      //                   <Form.Label>Email address</Form.Label>
      //                   <Form.Control  type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email}/>
      //               </Form.Group>
        
      //               <Form.Group controlId="pass">
      //                   <Form.Label>Password</Form.Label>
      //                   <Form.Control type="password" placeholder="Password" onChange={e => setpass(e.target.value)} value={pass}/>
      //               </Form.Group>
      //               <Button size="lg" block variant="dark" type="submit">Iniciar Sesion</Button>
      //           </Form>
      //           <Row className="margen">
      //               <Col>
      //               <a className="center">¿No tenes cuenta?</a>
      //               {/* <Link className="center" to="/">¿No tenes cuenta?</Link> */}
      //               </Col>
      //               <Col className="center"><Button variant="secondary">Crear cuenta</Button></Col>
      //           </Row>
        
      //           <Row>
      //               <Col className="center">
      //               <a className="center" href="/asd">¿Olvidaste tu contraseña?</a>
      //                   {/* <Link to="/">¿Olvidaste tu contraseña?</Link> */}
      //               </Col>
      //           </Row>
        
      //           <Row>
      //               <Col className="center">
      //                   <Image src={quattro} fluid />
      //                   {/* <img src={quattro} alt="img quattro"></img> */}
      //               </Col>
      //           </Row>
        
      //       </Container> ) 
      //       // ---------------++++++++++++++++++++++++++++++++
      //       : //este es la division entre el login y el auth
      //       //----------------++++++++++++++++++++++++++++++++
      //   (  <div >
                
      //           <Main></Main>
        
      //       </div>  )
            
      //     )
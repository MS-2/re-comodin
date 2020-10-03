import React, { useContext, useState, useEffect } from 'react'
import {ContextUser} from '../../contextos/userContext'
import './estilos.css'
import { Container, Button, Row,Col, Alert,Image,Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Main from '../main/main'
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
import logo from  '../../assets/LogoComodin.png';
import quattro from '../../assets/quattro.png';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

const HomePage = () => {

const [email, setemail] = useState("admin@localhost");
const [pass, setpass] = useState("admin");

const [show, setShow] = useState(false);
// const [open, setOpen] = useState(false);
const user = useContext(ContextUser);
// const classes = useStyles();

const handleSubmit = e =>{
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    user.login({email,pass})
}

useEffect(() => {

    if (user.error) {
        setShow(true)
    }
    // else if(user.isAuth){
    //     setOpen(true)
    // }

//   console.log("useeffect")
    
}, [user]);

// const logout = () => {
// localStorage.clear();
// user.logout(false);
// console.log("Logout")
// }

// const handleClose = () => {
//     setOpen(false);
//   };

// const handleToggle = () => {
//     setOpen(!open);
//   };

if (show) {
return (
<Alert variant="danger" onClose={() => setShow(false)} dismissible>
  <Alert.Heading>{user.error}</Alert.Heading>
</Alert>
);
}

  return (


  <Container>
        <Image src={logo} fluid />
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email}/>
            </Form.Group>

            <Form.Group controlId="pass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setpass(e.target.value)} value={pass}/>
            </Form.Group>
            <Button size="lg" block variant="dark" type="submit">Iniciar Sesion</Button>
        </Form>
        <Row className="margen">
            <Col>
            <a className="center">¿No tenes cuenta?</a>
            {/* <Link className="center" to="/">¿No tenes cuenta?</Link> */}
            </Col>
            <Col className="center"><Button variant="secondary">Crear cuenta</Button></Col>
        </Row>

        <Row>
            <Col className="center">
            <a className="center" href="/asd">¿Olvidaste tu contraseña?</a>
                {/* <Link to="/">¿Olvidaste tu contraseña?</Link> */}
            </Col>
        </Row>

        <Row>
            <Col className="center">
                <Image src={quattro} fluid />
                {/* <img src={quattro} alt="img quattro"></img> */}
            </Col>
        </Row>

    </Container> 
 
  )
}

export default HomePage;


















// import React, { Component } from 'react'
// import {ContextUser} from '../contextos/userContext'

// className HomePage extends Component {
//     static contextType = ContextUser;
//     state = {  }
//     render() { 
//         console.log(this.context)
//         return ( 
//             <div>
//                 {this.context.haveInternet ? <div>hola </div> : <div>chao</div> }
//             </div>
//          );
//     }
// }
 
// export default HomePage;
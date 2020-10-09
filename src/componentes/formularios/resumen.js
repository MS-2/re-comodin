import React, {useState, useEffect} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import 'react-html5-camera-photo/build/css/index.css';
import moment from 'moment'
import MiniH from '../header/miniHeader';
import './zStyles.css';

import 'react-dropdown/style.css';
import {makeStyles} from '@material-ui/core/styles';
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
 
const Resumen = () =>  {


const [numeroBoleta, setnumeroBoleta] = useState('');
const [fechaDeposito, setfecha] = useState('');
const [totalDeposito, settotalDeposito] = useState('');
const [fotoDeposito, setfotoDeposito] = useState('');
const classes = useStyles();


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(numeroBoleta)
    console.log(fotoDeposito)
    console.log("registros guardado")
    alert("se guardaran los datos : "+numeroBoleta +fechaDeposito)

}



  return (
    <div>
        <Form onSubmit={handleSubmit}>    
          (<Container>
        

            <Form.Group as={Row} controlId="numeroBoleta">
            <Form.Label column>cierre</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setnumeroBoleta(e.target.value)} value={numeroBoleta}/>
            </Col>
            </Form.Group>


            <Form.Group as={Row} controlId="totalDeposito">
            <Form.Label column>maquina</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalDeposito(e.target.value)} value={totalDeposito}/>
            </Col>
            </Form.Group> 

            <Form.Group as={Row} controlId="totalDeposito">
            <Form.Label column>local</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalDeposito(e.target.value)} value={totalDeposito}/>
            </Col>
            </Form.Group> 
            {/* <MiniH text="resumen recaudaciones"></MiniH> */}

            {/* <Form.Group as={Row} controlId="totalDeposito">
            <Form.Label column>buscar</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalDeposito(e.target.value)} value={totalDeposito}/>
            </Col>
            </Form.Group>  */}

          </Container>)
      </Form>
    </div>
    );
}

export default Resumen;




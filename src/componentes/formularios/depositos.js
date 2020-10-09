import React, {useState, useEffect} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import {Camera as IconCamera } from 'react-feather';
import 'react-html5-camera-photo/build/css/index.css';
// import moment from 'moment'
// import MiniH from '../header/miniHeader';
import IconButtonLink from "../customLink/customLink";
import './zStyles.css';
import Dropdown from 'react-dropdown';
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
 
const Depositos = () =>  {


const [drop, setdrop] = useState('');
const [numeroBoleta, setnumeroBoleta] = useState('');
const [fechaDeposito, setfecha] = useState('');
const [totalDeposito, settotalDeposito] = useState('');
const [activarCAM, setactivarCAM] = useState(false);
const [fotoDeposito, setfotoDeposito] = useState('');
const classes = useStyles();

// useEffect(() => {

//     if (fotoDeposito !== '') {
//         setactivarCAM(false)
//     }

//     return () => {
     
//         setactivarCAM(false)
      
//     // clean up
    
//   };

// }, []);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(numeroBoleta)
    console.log(fotoDeposito)
    console.log("registros guardado")
    alert("se guardaran los datos : "+numeroBoleta +fechaDeposito)

}

const handleSelect=(e)=>{
    console.log(e);
  }
  
const options = [
    'one', 'two', 'three'
  ]

const defaultOption = options[0];

  return (
    <div className="containerForm">
        <Form onSubmit={handleSubmit}>    
          (<Container>
        
            {!activarCAM ? <div>
            <Form.Group as={Row} controlId="maquina">
            <Form.Label column>cierre</Form.Label>
            <Col>
            <Dropdown options={options} onChange={handleSelect} value={defaultOption} placeholder="Select an option" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="numeroBoleta">
            <Form.Label column>numero de boleta</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setnumeroBoleta(e.target.value)} value={numeroBoleta}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="fechaDeposito">
            <Form.Label column>fecha deposito</Form.Label>
            <Col>
              <Form.Control  type="date" onChange={e => setfecha(e.target.value)} value={fechaDeposito}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="totalDeposito">
            <Form.Label column>total deposito</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalDeposito(e.target.value)} value={totalDeposito}/>
            </Col>
            </Form.Group> 
            </div> : null }

            <Form.Group controlId="camara">
            {activarCAM ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhoto = { (dataUri) => { setfotoDeposito(dataUri); } }
            /> : null}
            
            {fotoDeposito ? <p className="center">vista previa foto</p> : null}
            <Container className="center">

            <Image src={fotoDeposito}></Image>
            </Container>
            </Form.Group>

            <Container className={classes.root}>
            <IconButtonLink text="Foto Boleta on/off camara" color='#E5B63A' to='#' onclick={()=> setactivarCAM(!activarCAM)} icono={<IconCamera color="black"></IconCamera>}></IconButtonLink>
            </Container>

            {fotoDeposito ? <Button className="float-right margen" variant="danger" onClick={()=>{setfotoDeposito(''); setactivarCAM(false)}}>eliminar foto</Button> : null}
            {fotoDeposito ? <Button  block variant="dark" type="submit">confirmar</Button> : null}
          </Container>)
      </Form>
    </div>
    );
}

export default Depositos;









    //    <Form.Group as={Row} controlId="maquina">
    //         <Form.Label column>cierre</Form.Label>
    //         <Col>
    //         <Dropdown onSelect={handleSelect}>
    //         <Dropdown.Toggle variant="success" id="dropdown-basic" >
    //          Dropdown Button
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu>
    //             {cierres}
    //         </Dropdown.Menu>
    //         </Dropdown>
    //         </Col>
    //         </Form.Group>
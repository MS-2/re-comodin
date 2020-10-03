import React, {useState} from "react";
import { Container, Button, Row,Col, Alert,Form } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';

const Reca = () =>  {

const [formActivePanel1, setformActivePanel1] = useState(1);
const [formActivePanel1Changed, setformActivePanel1Changed] = useState(false);
const [fin, setfin] = useState('cuatro');
const [email, setemail] = useState('este es un mensaje de prueba');
const [segundo, setsegundo] = useState('dos');
const [tercero, settercero] = useState('tres');
const [activecam, setactivecam] = useState(false);
const [foto, setfoto] = useState();
const [ws, setws] = useState(false);
const [encode, setencode] = useState();
const handleNextPrevClick = (a) => (param) => (e) => {
    // console.log(a)
    // console.log(param)
    // console.log(e)
    setformActivePanel1(param)
}

const handleSubmission = () => {
  alert('Form submitted!');
}

const handleSubmit = e =>{
    e.preventDefault();
    console.log(email)
    console.log(segundo)
    console.log(tercero)
    console.log(fin)
    console.log(foto)
    console.log("registros guardado")
    setws(true)
    // let whatsappMessage = window.encodeURI(foto);

    // setencode(whatsappMessage) 
    // console.log(encode)

    axios.post('https://wa.me/?text=hola', {
      body: {},
      headers: {
        "origin": "*",
        "methods": "post",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
    }
    )

    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    });


//     let mail = e.target.email.value;
//     let fin = e.target.fin.value;
// console.log({mail,fin})
}

const handleTakePhoto = (dataUri) => {
  setfoto(dataUri)
}







  return (
    <div>
     
      <Form onSubmit={handleSubmit}>
        <div>       
          {formActivePanel1 === 1 &&
          (<div>
           <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control  type="text" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email}/>
            </Form.Group>

            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
{activecam ?<Camera
isFullscreen={false}
idealFacingMode = {FACING_MODES.ENVIRONMENT}
idealResolution = {{width: 480, height: 320}}
imageType = {IMAGE_TYPES.JPG}
imageCompression = {0.01}
onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            /> : null}
            {/* <Form.Control  type="text" placeholder="foto" onChange={e => console.log("camara")} value={activecam}/> */}
            <img src={foto}></img>
            <Button onClick={() => setactivecam(!activecam)}>activar camara</Button>
            </Form.Group>
            <Button className="float-right" onClick={handleNextPrevClick(1)(2)}>next</Button>
          
          </div>)}

          {formActivePanel1 === 2 &&
          (<div>
            <Form.Group controlId="segundo">
            <Form.Label>segundo</Form.Label>
            <Form.Control  type="text" placeholder="Enter" onChange={e => setsegundo(e.target.value)} value={segundo}/>
            </Form.Group>
            <Button color="mdb-color"  className="float-left" onClick={handleNextPrevClick(1)(1)}>previous</Button>
            <Button color="mdb-color"  className="float-right" onClick={handleNextPrevClick(1)(3)}>next</Button>
          </div>)}

          {formActivePanel1 === 3 &&
          (<div>
            <Form.Group controlId="tercero">
            <Form.Label>segundo</Form.Label>
            <Form.Control  type="text" placeholder="Enter" onChange={e => settercero(e.target.value)} value={tercero}/>
            </Form.Group>
            <Button color="mdb-color"  className="float-left" onClick={handleNextPrevClick(1)(2)}>previous</Button>
            <Button color="mdb-color"  className="float-right" onClick={handleNextPrevClick(1)(4)}>next</Button>
          </div>)}

          {formActivePanel1 === 4 &&
          (<div>
            <Form.Group controlId="fin">
            <Form.Label>Email address</Form.Label>
            <Form.Control  type="text" placeholder="Enter fin" onChange={e => setfin(e.target.value)} value={fin}/>
            </Form.Group>
            <Button className="float-left" onClick={handleNextPrevClick(1)(3)}>previous</Button>
            <Button size="lg" block variant="dark" type="submit">guardar datos</Button>
          </div>)}
          {/* {ws ? <a href={"https://api.whatsapp.com/send?text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {/* {ws ? <a href={"https://web.whatsapp.com/send?l=en&text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {ws ? <a href={"https://wa.me/?text="+email} target="_blank">enviar data a ws</a> : null }
        </div>
      </Form>
    </div>
    );
}

export default Reca
import React, {useState} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';



const ButtonCamara = () =>  {

    const [activarCAM, setactivarCAM] = useState();
    const [foto, setfoto] = useState();
    
    
      return (
        // <Form.Group controlId="camara">
        //     <Form.Label>camara</Form.Label>
        //     {activarCAM ?<Camera
        //     isFullscreen={false}
        //     idealFacingMode = {FACING_MODES.USER}
        //     idealResolution = {{width: 480, height: 320}}
        //     imageType = {IMAGE_TYPES.JPG}
        //     imageCompression = {0.01}
        //     onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        //     onCameraError = { (error) => { handleCameraError(error); } }
        //     onTakePhoto = { (dataUri) => { setfotoNumeroMaquina(dataUri); } }
        //     /> : null}
            
        //     {foto ? <p>vista previa imagen</p> : null}
        //     <Image src={foto}></Image>
            <Button onClick={() => setactivarCAM(!activarCAM)}>activar camara</Button>
        // </Form.Group>
        );
    }
    
    export default ButtonCamara;





        
import React, {useState} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import axios from 'axios';
import MiniH from '../header/miniHeader';
const Reca = () =>  {

const [formActivePanel1, setformActivePanel1] = useState(1);
//step1
const [numeroMaquina, setnumeroMaquina] = useState('');
const [fotoNumeroMaquina, setfotoNumeroMaquina] = useState();
const [activarCAM, setactivarCAM] = useState(false);

//step2
const [contadorDigitalEntrada, setcontadorDigitalEntrada] = useState('');
const [fotoContadorDigitalEntrada, setfotoContadorDigitalEntrada] = useState();
const [activarCAM1Step2, setactivarCAM1Step2] = useState();
const [contadorDigitalSalida, setcontadorDigitalSalida] = useState('');
const [fotoContadorDigitalSalida, setfotoContadorDigitalSalida] = useState();
const [activarCAM2Step2, setactivarCAM2Step2] = useState();

//step3
const [contadorDigitalManualEntrada, setcontadorDigitalManualEntrada] = useState('');
const [fotoContadorDigitalManualEntrada, setfotoContadorDigitalManualEntrada] = useState();
const [activarCAM1Step3, setactivarCAM1Step3] = useState();
const [contadorDigitalManualSalida, setcontadorDigitalManualSalida] = useState('');
const [fotoContadorDigitalManualSalida, setfotoContadorDigitalManualSalida] = useState();
const [activarCAM2step3, setactivarCAM2step3] = useState();
//step4
const [contadorMecanicoEntrada, setcontadorMecanicoEntrada] = useState('');
const [fotoMecanicoEntrada, setfotoMecanicoEntrada] = useState();
const [activarCAM1step4, setactivarCAM1step4] = useState();
const [contadorMecanicoSalida, setcontadorMecanicoSalida] = useState('');
const [fotoContadorMecanicoSalida, setfotoContadorMecanicoSalida] = useState();
const [activarCAM2step4, setactivarCAM2step4] = useState();


const [ws, setws] = useState(false);


const handleNextPrevClick = (a) => (param) => (e) => {
    setformActivePanel1(param)
}

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(numeroMaquina)
    console.log(contadorDigitalEntrada)
    console.log(contadorDigitalManualEntrada)
    console.log(contadorMecanicoEntrada)
    console.log("registros guardado")
    setws(true)

}

function handleCameraError (error) {
  console.log('handleCameraError', error);
}

function handleTakePhotoAnimationDone (dataUri) {
  console.log('handleTakePhotoAnimationDone');
}

  return (
    <div style={{display:"flex", minHeight:100+"vh", flexDirection:"column"}}>
     
      <Form onSubmit={handleSubmit}>
        <div>     
{/* PASO 1  */}
          {formActivePanel1 === 1 &&
          (<Container>
            
           <Form.Group controlId="numeroMaquina">
              <Form.Label>numero de maquina</Form.Label>
              <Form.Control type="text" value={numeroMaquina} onChange={e => setnumeroMaquina(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
            {activarCAM ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            onTakePhoto = { (dataUri) => { setfotoNumeroMaquina(dataUri); } }
            /> : null}
            
            {fotoNumeroMaquina ? <p>vista previa imagen</p> : null}
            <Image src={fotoNumeroMaquina}></Image>
            <Button onClick={() => setactivarCAM(!activarCAM)}>activar camara</Button>
            </Form.Group>

            <Button className="float-right" onClick={handleNextPrevClick(1)(2)}>next</Button>

          </Container>)}

{/* PASO 2  */}
          {formActivePanel1 === 2 &&
          (<Container>

            <Form.Group controlId="contadorDigitalEntrada">
            <MiniH text="Entrada Digital"></MiniH>
              <Form.Control  type="text" onChange={e => setcontadorDigitalEntrada(e.target.value)} value={contadorDigitalEntrada}/>
            </Form.Group>
            <Form.Group controlId="camara">
              <Form.Label>camara</Form.Label>
              {activarCAM1Step2 ?<Camera
              isFullscreen={false}
              idealFacingMode = {FACING_MODES.USER}
              idealResolution = {{width: 480, height: 320}}
              imageType = {IMAGE_TYPES.JPG}
              imageCompression = {0.01}
              onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
              onCameraError = { (error) => { handleCameraError(error); } }
              onTakePhoto = { (dataUri) => { setfotoContadorDigitalEntrada(dataUri); } }
              /> : null}
              {fotoContadorDigitalEntrada ? <p>vista previa imagen</p> : null}
              <Image src={fotoContadorDigitalEntrada}></Image>
              <Button onClick={() => setactivarCAM1Step2(!activarCAM1Step2)}>activar camara</Button>
            </Form.Group>

            <Form.Group controlId="contadorDigitalSalida">
            <MiniH text="Salida Digital"></MiniH>
              <Form.Control  type="text" onChange={e => setcontadorDigitalSalida(e.target.value)} value={contadorDigitalSalida}/>
            </Form.Group>
            <Form.Group controlId="camara">
              <Form.Label>camara</Form.Label>
              {activarCAM2Step2 ?<Camera
              isFullscreen={false}
              idealFacingMode = {FACING_MODES.USER}
              idealResolution = {{width: 480, height: 320}}
              imageType = {IMAGE_TYPES.JPG}
              imageCompression = {0.01}
              onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
              onCameraError = { (error) => { handleCameraError(error); } }
              onTakePhoto = { (dataUri) => { setfotoContadorDigitalSalida(dataUri); } }
              /> : null}
              {fotoContadorDigitalSalida ? <p>vista previa imagen</p> : null}
              <Image src={fotoContadorDigitalSalida}></Image>
              <Button onClick={() => setactivarCAM2Step2(!activarCAM2Step2)}>activar camara</Button>
            </Form.Group>

            <Button color="mdb-color"  className="float-left" onClick={handleNextPrevClick(1)(1)}>previous</Button>
            <Button color="mdb-color"  className="float-right" onClick={handleNextPrevClick(1)(3)}>next</Button>

          </Container>)}
{/* PASO 3  */}
          {formActivePanel1 === 3 &&
          (<Container>
            <Form.Group controlId="contadorDigitalManualEntrada">
            <MiniH text="Entrada Digital Manual"></MiniH>
            <Form.Control  type="text" onChange={e => setcontadorDigitalManualEntrada(e.target.value)} value={contadorDigitalManualEntrada}/>
            </Form.Group>
            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
            {activarCAM1Step3 ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            onTakePhoto = { (dataUri) => { setfotoContadorDigitalManualEntrada(dataUri); } }
            /> : null}
            {fotoContadorDigitalManualEntrada ? <p>vista previa imagen</p> : null}
            <Image src={fotoContadorDigitalManualEntrada}></Image>
            <Button onClick={() => setactivarCAM1Step3(!activarCAM1Step3)}>activar camara</Button>
            </Form.Group>

            <Form.Group controlId="contadorDigitalManualSalida">
            <MiniH text="Salida Digital Manual"></MiniH>
            <Form.Control  type="text" onChange={e => setcontadorDigitalManualSalida(e.target.value)} value={contadorDigitalManualSalida}/>
            </Form.Group>
            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
            {activarCAM2step3 ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            onTakePhoto = { (dataUri) => { setfotoContadorDigitalManualSalida(dataUri); } }
                        /> : null}
            {fotoContadorDigitalManualSalida ? <p>vista previa imagen</p> : null}
            <Image src={fotoContadorDigitalManualSalida}></Image>
            <Button onClick={() => setactivarCAM2step3(!activarCAM2step3)}>activar camara</Button>
            </Form.Group>
            <Button color="mdb-color"  className="float-left" onClick={handleNextPrevClick(1)(2)}>previous</Button>
            <Button color="mdb-color"  className="float-right" onClick={handleNextPrevClick(1)(4)}>next</Button>
          </Container>)}
{/* PASO 4  */}
          {formActivePanel1 === 4 &&
          (<Container>
            <Form.Group controlId="contadorMecanico">
            <MiniH text="Mecanico entrada"></MiniH>
            <Form.Control  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Form.Group>
            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
            {activarCAM1step4 ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            onTakePhoto = { (dataUri) => { setfotoMecanicoEntrada(dataUri); } }
            /> : null}
            {fotoMecanicoEntrada ? <p>vista previa imagen</p> : null}
            <Image src={fotoMecanicoEntrada}></Image>
            <Button onClick={() => setactivarCAM1step4(!activarCAM1step4)}>activar camara</Button>
            </Form.Group>

            <Form.Group controlId="contadormecanicosalida">
            <MiniH text="mecanico salida"></MiniH>
            <Form.Control  type="text" onChange={e => setcontadorMecanicoSalida(e.target.value)} value={contadorMecanicoSalida}/>
            </Form.Group>
            <Form.Group controlId="camara">
            <Form.Label>camara</Form.Label>
            {activarCAM2step4 ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.USER}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            onTakePhoto = { (dataUri) => { setfotoContadorMecanicoSalida(dataUri); } }
                        /> : null}
            {fotoContadorMecanicoSalida ? <p>vista previa imagen</p> : null}
            <Image src={fotoContadorMecanicoSalida}></Image>
            <Button onClick={() => setactivarCAM2step4(!activarCAM2step4)}>activar camara</Button>
            </Form.Group>


            <Button className="float-left" onClick={handleNextPrevClick(1)(3)}>previous</Button>
            <Button className="float-right" onClick={handleNextPrevClick(1)(5)}>next</Button>
          </Container>)}

{/* PASO 5  */} 
          {formActivePanel1 === 5 &&
          (<Container>
            <Form.Label>resultados</Form.Label>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total monedas</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total billetes</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Col>
            </Form.Group>

            <Form.Label>devolucion</Form.Label>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total monedas</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Col>
            </Form.Group>

            <Form.Label>prestamo</Form.Label>
            <Form.Group as={Row} controlId="contadorMecanico" >
            <Form.Label column>total prestamo</Form.Label>
            <Col>
              <Form.Control autoComplete="false"  type="text" onChange={e => setcontadorMecanicoEntrada(e.target.value)} value={contadorMecanicoEntrada}/>
            </Col>
            </Form.Group>

            <Button className="float-left" onClick={handleNextPrevClick(1)(4)}>previous</Button>
            <Button size="lg" block variant="dark" type="submit">guardar datos</Button>
          </Container>)}
          {/* ---------------------------- */}
          {/* {ws ? <a href={"https://api.whatsapp.com/send?text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {/* {ws ? <a href={"https://web.whatsapp.com/send?l=en&text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {ws ? <a href={"https://wa.me/?text="+numeroMaquina} target="_blank" rel="noopener noreferrer">enviar data a ws</a> : null }
        </div>
      </Form>
    </div>
    );
}

export default Reca;
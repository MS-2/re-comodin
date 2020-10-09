import React, {useState} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {Send,Camera as IconCamera } from 'react-feather';
import moment from 'moment'
import './zStyles.css'
// import axios from 'axios';
import MiniH from '../header/miniHeader';
import IconButtonLink from "../customLink/customLink";
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
//step5
const [totalMonedas, settotalMonedas] = useState();
const [totalBilletes, settotalBilletes] = useState();
const [totalMonedasyBilletes, settotalMonedasyBilletes] = useState();
const [totalMonedasDevolver, settotalMonedasDevolver] = useState();
const [totalPrestamo, settotalPrestamo] = useState();
//step6
let hora = moment().format('L');
const [fechaHora, setfechaHora] = useState(hora)
const [resultado, setresultado] = useState();
const [devolucion, setdevolucion] = useState();
const [totalIngresos, settotalIngresos] = useState();
const [prestamosEgresos, setprestamosEgresos] = useState();
const [totalEgresos, settotalEgresos] = useState();
const [devolucionComisiones, setdevolucionComisiones] = useState();
const [totalComisiones, settotalComisiones] = useState();
const [quinceporciento, setquinceporciento] = useState();
const [treintaPorciento, settreintaPorciento] = useState();
const [totalPagar, settotalPagar] = useState();
const [promedioPV, setpromedioPV] = useState();
const [estadoContadores, setestadoContadores] = useState();


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
    <div className="containerForm">
      <Form onSubmit={handleSubmit}>
        <div>     
{/* PASO 1  */}
          {formActivePanel1 === 1 &&
          (<Container>
            
           <Form.Group controlId="numeroMaquina" >
              <Form.Label className="center">numero de maquina</Form.Label>
              <Form.Control type="text" value={numeroMaquina} onChange={e => setnumeroMaquina(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="camara">
            {activarCAM ?<Camera
            isFullscreen={false}
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            idealResolution = {{width: 480, height: 320}}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.01}
            onTakePhoto = { (dataUri) => { setfotoNumeroMaquina(dataUri); } }
            /> : null}

            {fotoNumeroMaquina ? <p className="center">vista previa foto</p> : null}
            <Container className="center">
            <Image src={fotoNumeroMaquina}></Image>
            </Container>

            <IconButtonLink text="Foto on/off camara" color='#E5B63A' to='#' onclick={()=> setactivarCAM(!activarCAM)} icono={<IconCamera color="black"></IconCamera>}></IconButtonLink>
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
              <Form.Control  type="text" onChange={e => settotalMonedas(e.target.value)} value={totalMonedas}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total billetes</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalBilletes(e.target.value)} value={totalBilletes}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalMonedasyBilletes(e.target.value)} value={totalMonedasyBilletes}/>
            </Col>
            </Form.Group>

            <Form.Label>devolucion</Form.Label>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total monedas</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalMonedasDevolver(e.target.value)} value={totalMonedasDevolver}/>
            </Col>
            </Form.Group>

            <Form.Label>prestamo</Form.Label>
            <Form.Group as={Row} controlId="contadorMecanico" >
            <Form.Label column>total prestamo</Form.Label>
            <Col>
              <Form.Control autoComplete="false"  type="text" onChange={e => settotalPrestamo(e.target.value)} value={totalPrestamo}/>
            </Col>
            </Form.Group>
            <Button className="float-left" onClick={handleNextPrevClick(1)(4)}>previous</Button>
            <Button className="float-right" onClick={handleNextPrevClick(1)(6)}>next</Button>
          </Container>)}
{/* PASO 6  */} 
{formActivePanel1 === 6 &&
          (<Container>

            <Form.Label>liquidacion</Form.Label>
            <Form.Group as={Row} controlId="maquina">
            <Form.Label column>N de maquinas</Form.Label>
            <Col>
              <Form.Control disabled  type="text" onChange={e => setnumeroMaquina(e.target.value)} value={numeroMaquina}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="fechaHora">
            <Form.Label column>fecha y hora</Form.Label>
            <Col>
              <Form.Control type="text" onChange={e => setfechaHora(e.target.value)} value={fechaHora}/>
              {/* <input type="date" onChange={e => setfechaHora(e.target.value)} value={fechaHora}/>
              <input type="text" onChange={e => setfechaHora(e.target.value)} value={fechaHora}/> */}
            </Col>
            </Form.Group>

            <h5 style={{backgroundColor:"red"}}>ingresos</h5>
            <Form.Group as={Row} controlId="ingresoResultado">
            <Form.Label column>resultado</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setresultado(e.target.value)} value={resultado}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="ingrdevolucion">
            <Form.Label column>devolucion</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setdevolucion(e.target.value)} value={devolucion}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="contadorMecanico" >
            <Form.Label column>total</Form.Label>
            <Col>
              <Form.Control autoComplete="false"  type="text" onChange={e => settotalIngresos(e.target.value)} value={totalIngresos}/>
            </Col>
            </Form.Group>

            <h5 style={{backgroundColor:"red"}}>egresos</h5>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>prestamos</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setprestamosEgresos(e.target.value)} value={prestamosEgresos}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>total</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalEgresos(e.target.value)} value={totalEgresos}/>
            </Col>
            </Form.Group>

            <h5 style={{backgroundColor:"red"}}>comisiones</h5>
            <Form.Group as={Row} controlId="contadorMecanico">
            <Form.Label column>devolucion</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setdevolucionComisiones(e.target.value)} value={devolucionComisiones}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="totalComisiones">
            <Form.Label column>total</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalComisiones(e.target.value)} value={totalComisiones}/>
            </Col>
            </Form.Group>

            <h5 style={{backgroundColor:"red"}}>resultado</h5>
            <Form.Group as={Row} controlId="quinceporciento">
            <Form.Label column>comision 15%</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setquinceporciento(e.target.value)} value={quinceporciento}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="treintaPorciento">
            <Form.Label column>comision 30%</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settreintaPorciento(e.target.value)} value={treintaPorciento}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="totalPagar">
            <Form.Label column>total a pagar</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalPagar(e.target.value)} value={totalPagar}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="promedioPV">
            <Form.Label column>promedio PV</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setpromedioPV(e.target.value)} value={promedioPV}/>
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="estadoContadores">
            <Form.Label column>estado de contadores</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => setestadoContadores(e.target.value)} value={estadoContadores}/>
            </Col>
            </Form.Group>


            <Button className="float-left" onClick={handleNextPrevClick(1)(5)}>previous</Button>
            <Button size="lg" block variant="dark" type="submit">guardar datos</Button>
          </Container>)}
          {/* {ws ? <a href={"https://api.whatsapp.com/send?text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {/* {ws ? <a href={"https://web.whatsapp.com/send?l=en&text="+foto + " "+ email} target="_blank">whatsapp?</a> : null } */}
          {ws ? <a style={{display:"flex", justifyContent:"center"}} href={"https://wa.me/?text=datos del formulario : "+numeroMaquina} target="_blank" rel="noopener noreferrer">
            <Send size="100px" color="white" style={{backgroundColor:"#01e675", borderRadius:7}}>
              compartir en ws
            </Send>
                </a> 
                : 
                null 
          }

        </div>
      </Form>
    </div>
    );
}

export default Reca;
import React, {useState, useEffect} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import MiniH from '../header/miniHeader';

 
const Buscador = () =>  {



const [totalDeposito, settotalDeposito] = useState('');



const handleSubmit = (e) => {
    e.preventDefault();
    alert("dato")

}



  return (
    <div style={{minHeight:50+"vh"}}>
        <Form onSubmit={handleSubmit}>    
          (<Container>
            <Form.Group as={Row} controlId="totalDeposito">
            <Form.Label column>buscar</Form.Label>
            <Col>
              <Form.Control  type="text" onChange={e => settotalDeposito(e.target.value)} value={totalDeposito}/>
            </Col>
            </Form.Group> 
            <Button  block variant="success" type="submit">descargar</Button> 
          </Container>)
      </Form>
    </div>
    );
}

export default Buscador;


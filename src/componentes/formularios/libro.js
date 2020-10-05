import React, {useState} from "react";
import { Container, Button, Form, Image, Row,Col } from 'react-bootstrap';
import Camera, {FACING_MODES,IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {Send} from 'react-feather';
import moment from 'moment'
import MiniH from '../header/miniHeader';
import IconButtonLink from "../customLink/customLink";

const Libro = () =>  {

const [formActivePanel1, setformActivePanel1] = useState(1);


  return (
    <div style={{display:"flex", minHeight:100+"vh", flexDirection:"column"}}>

    </div>
    );
}

export default Libro;
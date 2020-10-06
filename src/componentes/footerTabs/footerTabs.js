
import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import {ContextUser} from '../../contextos/userContext'
// import { Container } from 'react-bootstrap';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import {Settings,LogOut, Home, HelpCircle } from 'react-feather';
import './estilos.css'
// import {Link} from "react-router-dom";

const FooterTabs = () => {
let history = useHistory();
const [value,SetValue] = useState(0);
const user = useContext(ContextUser);

const handleChange = (e, newValue) => {

    switch (newValue) {
        case 0:
            console.log("inicio")
            SetValue(newValue)
            history.push("/");
            break;
        case 1:
            console.log("configuracion")
            SetValue(newValue)
            break;
        case 2:
            console.log("ayuda")
            SetValue(newValue)
            break;
        case 3:
            console.log("logout")
            SetValue(newValue)
            user.logout()
            history.push("/");
            break;
        default:
            break;
    }

}

// const logout = () => {
// localStorage.clear();
// user.logout(false);
// console.log("Logout")
// }

  return (
        <div   style={{maxWidth:100+"%",width:100+"%",position:"sticky",bottom:0}}>
        <Paper elevation={3} square>
        <Tabs
          
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
        >
            <Tab icon={<Home size="25" ></Home>}  label="Inicio"/>
            <Tab icon={<Settings size="25" ></Settings>} label="Config"  />
            <Tab icon={<HelpCircle size="25" ></HelpCircle>}  label="Ayuda"/>
            <Tab icon={ <LogOut size="25" ></LogOut>} label="Salir" />
        </Tabs>
        </Paper>
        </div>

    )
}

export default FooterTabs;
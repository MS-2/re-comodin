import React, { Component, createContext } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
export const ContextUser =  createContext();

class ContextProvider extends Component {
    constructor(props) {
    super()
    this.state = { 
        isAuth: true,
        haveInternet: false,
        nombre: "Juan",
        error: null
     }
    }

    logout =  () => {
        this.setState({isAuth: !this.state.isAuth})
    }

    login = (query) => {
        if (navigator.onLine) {
            axios.post("https://valeria-server.herokuapp.com/api/auth/signin",query)
            .then(response => {
            this.setState({isAuth: !this.state.isAuth})
            console.log("response : ",response.data.token)
            console.log("response decodificado : ",decode(response.data.token))
            })
            .catch(error => {
            if (navigator.onLine) {
                this.setState({error: error.response.data.msg})
            }else{
                this.setState({error:"fallo en la conexion a internet, entrando en modo offline"})
            }
            });
           
        }else{
            this.setState({haveInternet:false})
            console.log("fallo en la conexion a internet")
           
        }
    }


    render() { 
        return ( 
        
            <ContextUser.Provider value={{...this.state, logout: this.logout, login: this.login}}>
                {this.props.children}
            </ContextUser.Provider> 
        );
    }
}
 
export default ContextProvider;
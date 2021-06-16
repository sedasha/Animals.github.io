import { Component } from 'react';
import {NavLink} from "react-router-dom";

const style ={
    header: {
        width: "100%",
        backgroundColor: "rgba(78, 178, 172, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px",
        height: "15%"
    },
    text:{
        padding: "0px",
        margin: "0px",
        letterSpacing: "8px",
        textAlign: "left",
        marginLeft: "40px",
        display: "inline-block",
        color: "white"
    }
}
class Header extends Component {
    state = {  }
    render() { 
        return ( 
                <div style={style.header}>
                   <NavLink to="/animals.github.io"><h1 style={style.text}>ANIMALS</h1></NavLink> 
                </div>
         
         );
    }
}
 
export default Header;
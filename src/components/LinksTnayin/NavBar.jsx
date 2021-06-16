import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "./Style.css"


const Mylink =({name})=>{

    return (
        <NavLink activeClassName="active" to = {`/animals.github.io/${name}`}>{name}</NavLink>
    )
}
class NavBar extends Component {
    state = { 
        listLink: [
            {id: 1, name: "Mammals"},
            {id: 2, name: "Birds"},
            {id: 3, name: "Reptiles"},
            {id: 4, name: "Amphibians"},

        ]
     }
    render() { 
        const {listLink} = this.state
        return ( 
            <div className="navbar">
             
                    <ul>
                        {listLink.map(({id, name}) => <li key={id}><Mylink name={name}/></li>)}
                    </ul>
                
            </div>
         );
    }
}
 
export default NavBar;
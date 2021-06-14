import { Component } from 'react';
import NavBar from './NavBar';
import Components from './Components'

const style = {
    dives:{
        display: 'flex',
        height: "85%"
    },
    components: {
        flex: "self",
        alignItem: "center",
        justifyContent: "center"
    }
}
class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <div style ={style.dives}>
            <NavBar />
            <Components />
            </div>
        );
    }
}
export default Body;
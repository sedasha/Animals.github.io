import {Component} from 'react';
import a from './main.png';

const style ={
    div:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "100px 0px"
        // position: "absolute"
    }
}
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={style.div}>

                <img src={a} alt=""/>
            </div>
         );
    }
}
export default Main
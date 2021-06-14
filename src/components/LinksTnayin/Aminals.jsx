import { Component, useState } from 'react';
import './Style.css'


const Image = ({ address, desc }) => {
    const [hide, setHide] = useState(false)
    const ClickHandler = () => {
        setHide(!hide)
    }
    return (
            <div className="div" >
                <img onClick={ClickHandler} src={address} width="200px" alt="" />
                {hide ? <div className="desc">{desc} </div> : ''}
            </div >
    )
}

class Animals extends Component {
    render() {
        const { animals } = this.props
        console.log(animals)
        return (
            <div className="newdiv">
                {animals.map(e =>
                    <Image address={e.addres} desc={e.desc} />
                )}
            </div>
        );
    }
}

export default Animals;
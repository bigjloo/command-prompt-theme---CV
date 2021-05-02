import React from 'react'
import Contact from './contact'
import ContentArea from './content-area'
import InputArea from './input-area'
import '../css/wrapper.css'

class Terminal extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="wrapper">
                <Contact />
                <ContentArea />
                <InputArea />
            </div>
        )
    }
}   

export default Terminal
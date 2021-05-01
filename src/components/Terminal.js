import React from 'react'
import Contact from './contact'
import ContentArea from './content-area'

class Terminal extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Contact />
                <ContentArea />
            </div>
        )
    }
}   

export default Terminal
import React from 'react'
import InputArea from './input-area'

class ContentArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>content area</h1>
                <InputArea />
            </div>
        )
    }
}

export default ContentArea
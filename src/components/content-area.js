import React from 'react'
import '../css/content-area.css'

class ContentArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: this.props.content,
        }
    }
    /*
    componentDidMount(){
        document.getElementById('content').innerHTML = this.state.content
    }
    */

    render(){
        return(
            <div className='content-area'>
                <p id="content">{this.state.content}</p>
            </div>
        )
    }
}

export default ContentArea
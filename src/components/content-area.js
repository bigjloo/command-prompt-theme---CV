import React from 'react'
import '../css/content-area.css'

class ContentArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: 'Type:<Br /> <table><tr><td>--work</td><td>work description</td></tr><tr><td>--education</td><td>education history</td></tr></table>',
        }
    }

    componentDidMount(){
        document.getElementById('content').innerHTML = this.state.content
    }

    render(){
        return(
            <div className='content-area'>
                <p id="content"></p>
            </div>
        )
    }
}

export default ContentArea
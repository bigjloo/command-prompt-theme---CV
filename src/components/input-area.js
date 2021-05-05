import React from 'react'
import '../css/input-area.css'

class InputArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: ''
        }
    }

    handleInput(e){
        this.setState({
            userInput: e.target.value
        })
    }

    handleInputSubmit(e){
        
        this.setState({
            userInput: ''
        })
        switch(e.target.formUserInput.value){
            case '--work':
                this.props.updateContent('Work')
                break
            case '--education':
                this.props.updateContent('Education')
                break
            case 'clear':
                this.props.updateContent('clear')
                break
            default:
                alert('Unknown command. Please try again!')
                
        }
        e.preventDefault()
    }
    
    componentDidMount(){
       document.getElementsByClassName('user-input-box')[0].focus();
    }
    

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.handleInputSubmit.bind(this)}>C:/users/visitor>
                    <input type='search' name='formUserInput' className="user-input-box no-outline" size="0" value={this.state.userInput} onChange={this.handleInput.bind(this)}  />
                </form>
            </div>
        )
    }
}

export default InputArea
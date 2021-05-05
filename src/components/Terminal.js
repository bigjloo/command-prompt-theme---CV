import React from 'react'
import Contact from './contact'
import ContentArea from './content-area'
import InputArea from './input-area'
import '../css/wrapper.css'

class Terminal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: '',
            isActiveWork: false,
            isActiveEducation: false,
        }
    }

    updateContent = (content) => {
        switch(content){
            case 'Work':
                this.setState(state => ({
                    isActiveWork: !(state.isActiveWork) 
                }))
                this.setState({content: 'work content'})
                break
            
            case 'Education':
                this.setState(state => ({
                    isActiveEducation: !(state.isActiveEducation)
                }))
                break
            
            case 'clear':
                this.setState(state => ({
                    isActiveWork: false,
                    isActiveEducation: false
                }))
                break 
        }
        /*
        if (content === 'Work'){
            this.setState(state => ({
                isActiveWork: !(state.isActiveWork) 
            }))
            this.setState({content: 'work content'})
        }
        
        if (content === 'Education'){
            this.setState(state => ({
                isActiveEducation: !(state.isActiveEducation)
            }))
        }

        if (content == 'clear'){
            this.setState(state => ({
                isActiveWork: false,
                isActiveEducation: false
            }))
        }
        */
    }

    render(){
        return (
            <div className="wrapper">
                <Contact />
                
                <div>
                    <p>Please enter command:</p>
                    <table>
                        <tr>
                            <td>--work</td>
                            <td>work description</td>
                        </tr>
                        <tr>
                            <td>--education</td>
                            <td>education history</td>
                        </tr>
                        <tr>
                            <td>--projects</td>
                            <td>project description</td>
                        </tr>
                    </table> 
                </div>
                <ContentArea content={this.state.content}/>
                <div className={this.state.isActiveWork ? '' : 'hidden'}>
                    <h1>Work Content Area</h1>
                </div>
                <div className={this.state.isActiveEducation ? '' : 'hidden'}>
                    <h1>Education Content Area</h1>
                </div>
                <InputArea updateContent = {this.updateContent}/>
            </div>
        )
    }
}   

export default Terminal
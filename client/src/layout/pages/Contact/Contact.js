import React, { Component } from "react" 
import './Contact.scss'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import LinearProgress from '@material-ui/core/LinearProgress';
 
class Contact extends Component {
    constructor() {
        super() 
        this.state = {
            firstname: '', 
            email: '',  
            message: '',
            buttonState: false,
            sending: false
        }
    }
    componentDidMount(){
        AOS.init({
          duration : 500
        })
    }
    
    async handleSubmit(e) {
        this.setState({ sending: true })  
        document.getElementById("theForm").reset();
        e.preventDefault()
        const { firstname, email, message} = this.state
         axios.post('http://localhost:5000/api/mailto', {
            name:firstname, 
            email:email, 
            message:message
        }).then(res => {
            console.log(res, this.state.buttonState)
            this.setState({ buttonState: true,  sending: false })
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const buttonSpot = this.state.buttonState ?
        (<div id='formSubmitText'> Thank you for filling out the form.< br />  Your information has been successfully sent!</div>)
        :
        (<button className='contactBtnHome'>Submit</button>)

        return (
            <div className="lp2_contactContainer"> 
                <div className="contactContent">
                    <div className="contactHeader">
                        <p data-aos="fade-down">Got a question?</p>
                        <p>I'd love to hear from you. Contact me about projects or just to chat<br/>and I'll get back to you as soon as&nbsp;possible</p>
                    </div>

                    <form id="theForm" className="contactForm" onSubmit={this.handleSubmit.bind(this)}> 
                        <div className="input-container">
                            <i className="icon icon1"></i>
                            <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                placeholder="Your name"
                                required
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>

                        <div className="input-container">
                            <i className="icon icon2"></i>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                        
                        <div className="input-container">
                            <i className="icon icon3"></i>
                            <textarea
                                id="message" 
                                type="textarea"
                                name="message"
                                placeholder="Your Message"
                                required
                                onChange={this.handleChange.bind(this)}
                            /> 
                        </div> 
                        <div className="submitContainer">
                            {this.state.sending ?
                                <LinearProgress />
                            :
                                buttonSpot
                            }
                        </div> 
                    </form>
                    </div> 
            </div> 
        );
    }
}

export default Contact;
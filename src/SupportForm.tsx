import React from 'react';
import './SupportForm.css';

interface State {
    name: string;
    email: string;
    message: string;
}

class SupportForm extends React.Component<any,State> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event: React.FormEvent) => {
        const target = event.target as HTMLInputElement
        switch (target.name) {
            case "name":
                this.setState({name: target.value});
                break;
            case "email":
                this.setState({email: target.value});
                break;
            case "message":
                this.setState({message: target.value});
                target.style.height = 'auto';
                target.style.height = (target.scrollHeight) + 'px';
                break;
        }
    }

    handleSubmit = () => {
        console.log("submitted")
        this.sendReq();
    }

    async sendReq() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        };
        const response = await fetch('http://127.0.0.1:8080/api/v1/feedback', requestOptions);
        const data = await response.json();
        console.log(data);
    }


    render() {
        return (
            <div className="SupportForm">
                <div className="field-container" id="name-field-container">
                    <input className="field input-element" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="field-container" id="email-field-container">
                    <input className="field input-element" name="email" type="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="field-container" id="message-field-container">
                    <textarea className="field textarea-element" name="message" placeholder="message" value={this.state.message} onChange={this.handleChange} />
                </div>
                {/*<div className="empty-column" id="empty-left-column" />*/}
                {/*<div className="empty-column" id="empty-right-column" />*/}
                <div id="submit-button" onClick={this.handleSubmit}>
                    <p className="noselect">Send</p>
                </div>
            </div>
        );
    }
}

export default SupportForm;

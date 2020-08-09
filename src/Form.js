import React from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      denotion: '',
      firstName: '',
      lastName: '',
      Pass: '',
      gender: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});  
  }

  handleSubmit(event) {
    alert('name is: ' + this.state.denotion +' '+ this.state.firstName + ' ' + this.state.lastName);
    
    alert('gender is: ' + this.state.gender);

    console.log(this.state);
    this.setState({
      denotion: '',
      firstName: '',
      lastName: '',
      Pass: '',
      gender: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
      <form onSubmit={this.handleSubmit} class="border border-light p-5">
        <label>
          First Name : 
          <select value={this.state.denotion} onChange={event=>this.setState({denotion:event.target.value})}>
          <option value="">select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input 
          name="firstName"
          type="text" 
          value={this.state.firstName} 
          onChange={this.handleChange} 
          placeholder="enter your first name" />
        </label>
        Last Name: 
        <input 
        name="lastName"
        type="text" 
        value={this.state.lastName} 
        onChange={this.handleChange} 
        placeholder="enter your last name"/>
        Password:
        <input
        name="Pass"
        type="password"
        value={this.state.Pass}
        onChange={this.handleChange}
        placeholder="Password" />
        <br/>
        <label>
          Gender:
          <select value={this.state.gender} onChange={event=>this.setState({gender:event.target.value})}>
          <option value="">select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label> 
        <hr/>
        <input type="checkbox" />
        <label>I agree to terms and condition</label>

        <br/>
        <div className="submit">
        <input className="mr-2" type="submit" value="Submit"/>
        </div>

        
      </form>
      </div>
     
    );
  }
}
  
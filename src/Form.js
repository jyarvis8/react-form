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
      gender: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value});  
    console.log(event.target.name)
    console.log(event.target.value)
  }

  handleSubmit(event) {
    //alert('name is: ' + this.state.denotion +' '+ this.state.firstName + ' ' + this.state.lastName);
    //alert('gender is: ' + this.state.gender);

    console.log(this.state);
    this.setState({
      denotion: '',
      firstName: '',
      lastName: '',
      Pass: '',
      gender: '',
      email: '',
    });
    event.preventDefault()
  }

  render() {
    const {denotion} = this.state
    const {firstName} = this.state
    const {lastName} = this.state
    const {email} = this.state
    const {gender} = this.state
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
        Email: 
        <input 
        name="email"
        type="email" 
        value={this.state.email} 
        onChange={this.handleChange} 
        placeholder="enter your Email"/>
        
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
    <p>Name is : {denotion} {firstName} {lastName}</p>
    <p>Email : {email}</p>
    <p>Gender is : {gender}</p>

        
      </form>
      </div>
     
    );
  }
}
  
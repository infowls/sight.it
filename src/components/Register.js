import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components-style/Register.css';
import axios from 'axios'

const api = axios.create({
    baseURL : `http://localhost:3000`
})

class Register extends Component {
    state = {
        username : '',
        email : '',
        password : ''
    }

    handleSubmit = event => {
        event.preventDefault();
    
        api.post('/users/', { 
            username : this.state.username,
            email: this.state.email,
            password: this.state.password
         })
          .then(res => {
              if (res.data._id != null && res.data.username!= null) {
                this.props.history.push('/sign-in');
              }
          })
    }

    handleUsername = event => {
        this.setState({ username: event.target.value });
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="register">
                <h1 className="title" >Register</h1>
                <form className="registerForm" onSubmit={this.handleSubmit}>    
                    <input className="input-element" type="text" placeholder="Enter username"
                     onChange={this.handleUsername} /><br/>
                    <input className="input-element" type="email" placeholder="Enter email" 
                    onChange={this.handleEmail}/><br/>
                    <input className="input-element" type="password"  placeholder="Password" 
                    onChange={this.handlePassword}/><br/>
                    <button type="submit" className="log-in">Register</button><br/>
                    <label>Already have an account, 
                        <Link to ="/sign-in" className="signin-link"> Sign in ! </Link>
                    </label>
                </form>
            </div>
        )
    }
}

export default Register

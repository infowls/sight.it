import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home from "../assets/left-arrow.svg";
import '../components-style/SignIn.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";

const api = axios.create({
    baseURL : `http://localhost:3000`
})

export class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }

    showNav = this.props.show;

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        api.post('/users/login', { 
            email: this.state.email,
            password: this.state.password
         })
          .then(res => {
              if (res.data._id != null && res.data.username!= null) {
                localStorage.setItem('user', JSON.stringify(res.data));
                console.log(localStorage.getItem('user'));
                this.showNav();
                this.props.history.push('/');
              }
          })
    }

    render() {
        return (
            <div className="sign-in">
                <button className="home-button" onClick={this.props.show}>
                   <Link to="/"> <img src={home} alt="Home" className="home-arrow home-button"/> </Link>
                </button><br/>
                <h1 className="title" >Sign in</h1>
                <form onSubmit={this.handleSubmit}>    
                    <input className="input-element" type="email" aria-describedby="emailHelp"
                    onChange={this.handleEmail} placeholder="Enter email"/><br/>
                    <input className="input-element" type="password" 
                     onChange={this.handlePassword}  placeholder="Password"/><br/>
                    <button type="submit" className="log-in">Sign in</button><br/>
                    <label>Don't have an account, 
                        <Link to ="/register" className="register-link"> REGISTER! </Link>
                    </label>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn)

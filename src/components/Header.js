import React, { Component } from 'react';
import logo from "../assets/heron.svg";
import search from "../assets/loupe.svg";
import { Link } from 'react-router-dom';
import '../components-style/Header.css';
import axios from 'axios';

const api = axios.create({
    baseURL : `http://localhost:3000`
})

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn : localStorage.getItem("user") ? true : false
        }
    }

    handleLogOut = event => {

        api.post('/users/logout')
          .then(res => {
                if(res.status === 201) {
                    localStorage.clear();
                    window.location.reload();
                }  
          })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarTogglerDemo01">
                    <Link to="/" className="link-nav">
                        <img src={logo} alt="Wander Feather" className="logo"/>
                    </Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link to="/trending" className="link-nav">
                            <li className="nav-item nav-link">Trending</li>
                        </Link>
                        <Link to="/new" className="link-nav">
                            <li className="nav-item nav-link">New</li>
                        </Link>
                        <Link to="/add-post" className="link-nav">
                            {this.state.loggedIn && (<li className="nav-item nav-link">Add Post</li>)}
                        </Link>
                        <Link to="/my-posts" className="link-nav">
                            {this.state.loggedIn && (<li className="nav-item nav-link">My Posts</li>)}
                        </Link>
                        <Link to="/about" className="link-nav">
                            {!this.state.loggedIn && (<li className="nav-item nav-link">About</li>)}
                        </Link>
                        <Link to="/contact" className="link-nav">
                            {!this.state.loggedIn && (<li className="nav-item nav-link">Contact</li>)}
                        </Link>
                    </ul>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item nav-link">
                            <form className="form-inline">
                                <input  type="search" placeholder="Search" aria-label="Search"/>
                                <button type="submit" className="submit-button"><img src={search} className="search" alt="Seacrh"/></button>
                            </form>
                        </li>
                        <Link to="/sign-in" className="link-nav">
                            {!this.state.loggedIn && (<li onClick={this.props.hide} className="nav-item nav-link">Sign in</li>)}
                        </Link>
                        <Link to="/" className="link-nav">
                            {this.state.loggedIn && (<li className="nav-item nav-link" onClick={this.handleLogOut}>Sign out</li>)}
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header

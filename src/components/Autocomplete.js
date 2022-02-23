import React, { Component } from 'react';
import uuid from 'react-uuid';

import {getSuggestions} from '../utils/Suggest.js';
import pin from '../assets/pin.svg';

import '../components-style/AddPost.css';
import '../components-style/Autocomplete.css';

export default class Autocomplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggested : [],
            selected: "",
            input: ""
        }
    }

    handleInput = event => {
        this.setState(
            { 
                suggested : getSuggestions(event.target.value),
                input: event.target.value,
                selected: ""

            }); 
    };

    handleSelect = event => {
        this.setState(
            { 
                selected : event.target.innerHTML, 
                input : ""
            }); 
    }

    render() {
        return (
            <div>
                <div className="form-group dropdown">
                    <input className="input-field" onChange={this.handleInput} 
                        placeholder="Add location" 
                        value={this.state.selected.length > 0 ? this.state.selected : this.state.input 
                        }/>
                    <img src={pin} alt="Location" className="input-icon"/>
                    <div className="dropdown-content">
                    {
                        (this.state.input.length > 0 || this.state.selected.length === 0)
                         && this.state.suggested.map(suggestion => (
                            <li key={uuid()} className="suggestion"
                            onClick={this.handleSelect}>
                                {suggestion.name} , {suggestion.country}
                            </li>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

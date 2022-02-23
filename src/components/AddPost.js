import React, { Component } from 'react';

import calendar from '../assets/calendar.svg';
import companion from '../assets/user.svg';
import pen from '../assets/pen.svg';
import tag from '../assets/price-tag.svg';
import add from '../assets/plus.svg';

import Autocomplete from './Autocomplete.js';

import '../components-style/AddPost.css';

export class AddPost extends Component {
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-5">
                        <h3>Add post</h3>
                        <form className="add-post">
                            <Autocomplete/>
                            <div className="form-group">
                                <input type="text" className="input-field"   placeholder="Add date"/>
                                <img src={calendar} alt="Date" className="input-icon"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field"   placeholder="Add people"/>
                                <img src={companion} alt="People" className="input-icon"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field"   placeholder="Add impression"/>
                                <img src={pen} alt="Impression" className="input-icon"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field"   placeholder="Add tag (Optional)"/>
                                <img src={tag} alt="Tag" className="input-icon"/>
                            </div>
                            <button type="submit" className="add-post-button">Add</button>
                        </form>
                    </div>
                    <div className="col photo-container">
                        <button className="add-photos-button">
                            <img src={add} className="add" alt="Add photos"/>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default AddPost

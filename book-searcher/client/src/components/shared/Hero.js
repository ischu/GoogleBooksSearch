import React, { Component } from 'react';
import './style.css'

class Hero extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid m-0">
                <div class="container">
                    <h1 class="display-3">Google Book Search</h1>
                    <p class="display-4">Search for Books and save them in your personal Library</p>
                </div>
            </div>
        )
    }
}

export default Hero
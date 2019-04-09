import React from 'react';
import "./style.css"

function Container(props) {
        return (
            <div className="bookBox container d-flex">
                {props.children}
            </div>
        )
} 

export default Container
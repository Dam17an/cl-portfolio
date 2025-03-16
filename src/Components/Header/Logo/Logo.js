import React from "react";
import "./Logo.css";

const Logo = (props) => {
    const title = props.title;
    return (
        <div className="logo">
            <p> { title }</p>
        </div>
    )
}

export default Logo;
import React from "react";
import "./Button.css";
const Button = (props) => {
    const {title, link, shape} = props;
    return (
        <a href={link} className={shape}>
            { title }
        </a>
    )
}

export default Button;
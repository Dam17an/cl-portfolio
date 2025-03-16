import React from "react";

const MenuItem = (props) => {
    const {title, link} = props;
    return (
        <li><a href={link}>{ title }</a></li>
    )
}

export default MenuItem;
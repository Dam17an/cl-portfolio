import React from "react";
import "./Menu.css";
const Menu = (props) => {
    return (
        <nav className="menu">
            <ul>
                {props.children}
            </ul>
        </nav>
    );
}
export default Menu;
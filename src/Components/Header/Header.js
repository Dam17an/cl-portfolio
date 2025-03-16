import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <header className="header">
            {props.children}
        </header>
    )
}

export default Header;
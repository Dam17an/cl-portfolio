import React from 'react';

const Header = () => {
    return (
        <header className="header">
            {props.children}
        </header>
    )
}

export default Header;
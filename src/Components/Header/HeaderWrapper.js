import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import Header from "./Header";

const HeaderWrapper = () => {
    const items = [
        { title: "Home", link: "/" },
        { title: "About", link: "/bout" },
        { title: "Projects", link: "/" },
        { title: "Services", link: "/" },
    ];
    return(
        <Header>
            <Logo title="Georgy"/>
            <Menu>
                { items.map((item,i) => {
                    return (<MenuItem key={i} title={item.title} link={item.link}/>);
                })}
            </Menu>
        </Header>
    )
}

export default HeaderWrapper;
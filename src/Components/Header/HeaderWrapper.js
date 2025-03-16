import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import Header from "./Header";
import Button from "../Common/Button/Button";
import Icon from "../Common/Icon/Icon";
import switcherIcon from "../../assets/switcher.svg";

const HeaderWrapper = () => {
    const items = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
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
            <Button title="Contact Me" link="#contact" shape="btn-lightblue" />
            <Icon url={switcherIcon}/>
        </Header>
    )
}

export default HeaderWrapper;
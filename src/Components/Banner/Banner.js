import React from "react";

import profile from "../../assets/profile.png";
import Button from "../Common/Button/Button";
const Banner = (props) => {
    return (
        <div className="banner">
            <img src={profile} alt="profile picture"/>
            <h1 className="banner-title">Georgy Georgy</h1>
            <p className="banner-subtitle">Data Sorcerer</p>
            <p className="banner-desc">As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</p>
            <Button title="Contact Me" link="#contact" shape="rounded btn-lightblue" />
        </div>
    )
}

export default Banner;
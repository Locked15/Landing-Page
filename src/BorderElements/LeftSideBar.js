import React from "react";
import SidesGalleryElement from "./SidesGalleryElement";
import './Styles/style.css';
import '../index.css';

function LeftSideBar() {
    return (
        <aside className="aside-block gallery">
            <SidesGalleryElement imagePath='../resources/Images/CrimeaTours.jpg' caption='Крым.'/>

            <SidesGalleryElement imagePath='../resources/Images/SochiPhoto.jpg' caption='Сочи.'/>
        </aside>
    )
}

export default LeftSideBar;

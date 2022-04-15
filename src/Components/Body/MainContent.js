import React from 'react';
import AboutCompany from './Company/AboutCompany';
import Benefits from './Company/Benefits';
import HotToursFeatures from './InfoAboutTours/HotToursFeatures';
import ToursInfo from './InfoAboutTours/ToursInfo';
import ToursToVietnam from './InfoAboutTours/ToursToVietnam';

function MainContent() {
    return (
        <main className='main-content'>
            <AboutCompany />
            <Benefits />
            <HotToursFeatures />
            
            <ToursInfo />
            <ToursToVietnam />
        </main>
    )
}

export default MainContent;

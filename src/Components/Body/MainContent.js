import React from 'react';
import AboutCompany from './Company/AboutCompany';
import Benefits from './Company/Benefits';
import HotToursFeatures from './InfoAboutTours/HotToursFeatures';

function MainContent() {
    return (
        <main className='main-content'>
            <AboutCompany />
            <Benefits />

            <HotToursFeatures />
            
        </main>
    )
}

export default MainContent;

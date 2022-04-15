import React from 'react';
import AboutCompany from './AboutCompany';
import Benefits from './Benefits';
import HotToursFeatures from './HotToursFeatures';

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

import React from 'react';
import AboutCompany from './AboutCompany';
import Benefits from './Benefits';
import HotToursFeatures from './HotToursFeatures';

function MainContent() {
    return (
        <main style={{maxWidth: '57.25%'}}>
            <AboutCompany />
            <Benefits />

            <HotToursFeatures />
        </main>
    )
}

export default MainContent;

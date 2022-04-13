import React from 'react';
import AboutCompany from './AboutCompany';
import HotToursFeatures from './HotToursFeatures';

function MainContent() {
    return (
        <main style={{maxWidth: '57.25%'}}>
            <AboutCompany />

            <HotToursFeatures />
        </main>
    )
}

export default MainContent;

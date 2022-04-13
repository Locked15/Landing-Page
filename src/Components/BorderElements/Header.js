import React from "react";
import '../../index.css';

function Header() {
    function learnMore() {
        alert('Click.');
    }

    return (
        <header>
            <button className="go-top-button header-button">&#8593;</button>

            <div className="brand-box">
                <span className="brand">Путешествуй просто</span>
            </div>

            <div className="main-header">
                <h1 className="main-header-text">
                    <span className="header-first-text">Самые лучшие туры</span>
                    <span className="header-second-text">
                        А также 'горячие' предложения!
                    </span>

                    <button
                        className="main-header-button header-button"
                        onClick={learnMore}
                    >
                        Узнать больше
                    </button>
                </h1>
            </div>
        </header>
    );
}

export default Header;

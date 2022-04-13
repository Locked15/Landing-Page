import React from 'react';
import '../../index.css';

function Footer() {
    return (
        <footer>
            <div className="hover-button"></div>

            <div className="main-container">
                <div className="main-subcontainer">
                    <div className="general-text">
                        <div
                            className="text"
                            style={{textAlign: 'center', marginTop: '0.25%', display: 'inline-block'}}
                        >
                            <span
                                >Компания 'Путешествуй просто' осуществляет
                                деятельность на территории более чем 30
                                стран.</span
                            >
                        </div>

                        <div
                            className="text"
                            style= {{float: 'right', marginTop: '2.5%', marginRight: '5%'}}
                        >
                            &copy; Компания 'Путешествуй просто'.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

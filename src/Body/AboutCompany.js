import React from "react";
import '../Body/Styles/general.css';

function AboutCompany() {
    return (
        <div id="aboutCompany" style={{maxWidth: '60%'}}>
            <hr/>

            <article>
                <h2 className="header-text">О компании</h2>
                <p>
                    Наша компания создана для Вашего комфорта.
                    <br />
                    Мы сделали выбор и покупку тура максимально удобным для Вас.
                </p>

                <img src={require('../resources/Images/Beauty-Photo.jpg')} className="half right" alt="AboutCompany"/>
                <p>
                    В нашем поиске можно найти путешествия от 80-ти
                    туроператоров. Оплата туров происходит через защищенные
                    порталы Сбербанка. Если Вам понадобится помощь специалиста в
                    подборе тура, наши менеджеры всегда, с радостью, подберут
                    путешествие по Вашим запросам и будут с Вами на связи на
                    протяжении всего отдыха. Покупая тур в нашей компании, Вы не
                    платите никаких дополнительных комиссий и сборов, Вы
                    бронируете тур по цене туроператора.
                </p>
            </article>
        </div>
    );
}

export default AboutCompany;

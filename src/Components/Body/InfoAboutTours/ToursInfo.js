import React from 'react';
import '../Styles/general.css';

function ToursInfo() {
    return (
        <div>
            <h3 id='generalToursInfo' className='header-text'>Информация о турах</h3>
            <p>
                В дальнейшем списке будет представлен список туров.
                Чтобы узнать информацию о туре, наведите на него мышь.<br/>
                В появившемся меню отобразится цена тура и его направление.
            </p>
        </div>
    )
}

export default ToursInfo;

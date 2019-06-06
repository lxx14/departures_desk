import React from 'react';
import './style.scss';

const Header = () => {


    return (
        <div className='header-container'>
            <h2>Dnipro</h2>
            <div className='nav-container'>
                <ul>
                    <li>Пассажирам</li>
                    <li>Услуги IEV</li>
                    <li>VIP</li>
                    <li>Партнерам</li>
                </ul>
                <span>RU</span>
            </div>
        </div>
    )
}

export default Header;
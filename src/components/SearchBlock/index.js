import React from 'react';
import './style.scss';

const SearchBlock = () => {

    return (
        <div className='search-container'>
            <h1>ПОИСК РЕЙСА</h1>
            <form>
                <i className="fas fa-search"></i>
                <input type="text" placeholder='Город или номер рейса'/>
                <button>НАЙТИ</button>
            </form>
        </div>
    )
}

export default SearchBlock;
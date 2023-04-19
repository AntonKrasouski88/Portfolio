import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href={'#'}>Главная</a>
            <a href={'#'}>Скилы</a>
            <a href={'#'}>Работы</a>
            <a href={'#'}>Контакты</a>
        </nav>
    );
};
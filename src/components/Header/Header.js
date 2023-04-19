import React from 'react';
import style from './Header.module.css'
import s from './../../common/styles/Container.module.css'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${s.container} ${style.container}`}>
                <Nav/>
            </div>
        </div>
    );
};
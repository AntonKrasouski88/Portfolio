import React from 'react';
import style from './Main.module.css'
import s from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.blockMain}>
            <div className={`${s.container} ${style.content}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Антон Красовский</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}>
                    <img src="#" alt="my_photo"/>
                </div>
            </div>
        </div>
    );
};


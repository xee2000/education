import style from './Education.module.css'
import React, { useState } from 'react';
import Sub01 from './sub/Sub01.jsx';
export default function Education(){

    return <div className={style.container}>
        <div className={style.header}>
            <div className={style.title_img}>
                <div className={style.title_content}>
                <p className={style.bu_title1}>You Happy</p>
                <p className={style.bu_title2}>프로그램</p>
                </div>
                <p></p>
        {/* <div className={style.menu}>
            <ul className={style.menu_Bar}>
                <li className={style.item} onClick={handleClick01}>
                성인 마음탐구 검사</li>
                <li className={style.item}>우울증</li>
                <li className={style.item}>스트레스</li>
                <li className={style.item}>공황장애</li>
                <li className={style.item}>불안장애</li>
                <li className={style.item}>대인관계</li>
                <li className={style.item}>분노조절</li>
                <li className={style.item}>중독상담</li>
                <li className={style.item}>불면증</li>
                <li className={style.item}>섭식장애</li>
                <li className={style.item}>성격장애</li>
            </ul>
        </div> */}

        <div className={style.sub01_page}>
          <Sub01 />
        </div>
            </div></div></div>
        
}
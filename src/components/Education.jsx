import './Education.css'
import React, { useState } from 'react';
import Sub01 from './sub/Sub01';
export default function Education(){
    const [status1, setStatus1] = useState(false);
    const handleClick01 = () => {
        setStatus1(true);
    }

    return <div className="container">
        <div className="header">
            <div className='title_img'>
                <div className='title_content'>
                <p className='bu_title1'>You Happy</p>
                <p className='bu_title2'>성인상담</p>
                </div>
                <p></p>
        <div className='menu'>
            <ul className='menu_Bar'>
                <li className='item' onClick={handleClick01}>
                성인 마음탐구 검사</li>
                <li className='item'>우울증</li>
                <li className='item'>스트레스</li>
                <li className='item'>공황장애</li>
                <li className='item'>불안장애</li>
                <li className='item'>대인관계</li>
                <li className='item'>분노조절</li>
                <li className='item'>중독상담</li>
                <li className='item'>불면증</li>
                <li className='item'>섭식장애</li>
                <li className='item'>성격장애</li>
            </ul>
        </div>

        {status1 && (
        <div className='sub01_page'>
          <Sub01 />
        </div>
      )}
            </div>
        
        </div>
    </div>
}
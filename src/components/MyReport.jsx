import React from 'react';
import style from './Myreport.module.css';
export default function MyReport(){
    return <div className={style.container}>
        <div className={style.header}>
            <div className={style.title_img}>
                <div className={style.title_content}>
                <p className={style.bu_title1}>You Happy</p>
                <p className={style.bu_title2}>My Report 소개</p>
                </div>
            </div>
        </div>  

        <div className={style.body}>
        <div className={style.body_title}>My Report Story</div>
        <div className={style.body_content}>
            <div className={style.body_img}></div>
            <div className={style.body_text}>
            마이레포트는 '나'라는 인격의 방향성을 잡고 '나'를 위해 살아가고자 하는 목표를 갖고 살아가는 공동체입니다.<br/>
        학습지의 제작을 위해 사람들의 심리상태를 종합하여 컨설팅을 진행하며<br/> 타 컨설팅 센터와 협업하여 센터를 확장시키고자 힘쓰고 있습니다.
            </div>
        </div>

        <div className={style.level_content}>
            <div className={style.levelImg}></div>
            <div className={style.levelText}>
           마이레포트는 국가 공인 자격을 갖춘 석박사 이상의 심리 전문가의 따뜻하고 심도 깊은 상담으로 방문해주시는 내담자의 상담 만족도와 상담 효과가 탁월한 종합심리상담센터입니다.<br/><br/>

아동, 청소년, 성인, 부부, 가족 모든 분야의 전문가가 함께하는 유해피는 ‘가족 체계적’인 상담으로 여러분의 상처 치유의 과정에 따뜻한 동반자가 되겠습니다.<br/><br/>

상담은 물론 심리검사를 통해 객관적인 나를 찾고 이해하며 보다 나은 행복한 삶을 꾸려나갈 수 있도록 의미있는 시작을 마이레포트와 함께 하세요.
            </div>
        </div>

        <div className={style.happy_content}>
            <div className={style.happy_img}></div><br/>
        <div className={style.happy_title}>행복한 마음 만들기</div>
        <div className={style.happy_content}>따뜻한 마음을 나누고 진실된 모습으로<br/>
        내담자 마음의 무거운 짐을 덜어드리는<br/>
        행복한 여정에 유해피심리상담센터가<br/>
        함께 하겠습니다. 
        </div>
        </div>

        </div>
    </div>
}
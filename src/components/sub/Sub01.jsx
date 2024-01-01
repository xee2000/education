import React from 'react';
import style from './Sub01.module.css';
export default function Sub01(){
    return <div className={style.container}>
        <div className={style.title}>psychological test </div>
    <div className={style.Card}>
        <div className={style.Card_Img}></div>
        <div className={style.Card_Title}>
    - 나를 힘들게 하는 심리적 고통은 결국 과연 , 나는 어떤 사람인가 라는 주제와 연결되기 때문에
심리 상담은 물론 다양한 심리검사를 통해 객관적인 나를 찾아가는 검사를 진행하게 됩니다.
        </div>
    </div>
<div className={style.title}>life graph</div>
    <div className={style.MindCard}>
            <div className={style.MindImg}></div>
            <div className={style.Mindcontent}>
                - 나를 알기위한 시간중 나의 인생을 되감아보면서 스스로에게 어떤 사람인지 복기하는 검사를 진행하게 됩니다.
            </div>
    </div>

    <div className={style.title}>Inner child</div>
    <div className={style.InnerCard}>
            <div className={style.InnerImg}></div>
            <div className={style.Innercontent}>
                - 나의 내면을 만나보는 중요한 단계로 상처를 받은 나자신과 만나 대화를 나누는 검사를 진행하게 됩니다. 
            </div>
    </div>   

    </div>  
}
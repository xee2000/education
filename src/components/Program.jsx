import React from 'react';
import style from './Program.module.css'
import { TfiApple } from "react-icons/tfi";
export default function Program(){
    return <div className={style.container}>
    <div className={style.b2b}>
        <div className={style.b2bline}>
            <div className={style.b2b_title}>
                우리 그룹에 딱 맞는 멘탈케어 솔루션을 찾고 있다면?
            </div>
            <div className={style.b2b_content}>
                기획부터 쉽고 편리한 운영보고까지.<br/>
                원하는 방식으로 도입하는 맞춤형 멘탈케어 솔루션
            </div>
            <button className={style.solbutton}>솔루션 도입/협업 문의하기</button>
        </div>

            <div className={style.b2bimg}></div>
    </div>
    <div className={style.cardList}>
        <div className={style.card}>
            <div className={style.card_title}>#나다움</div>
            <div className={style.card_cate}>나를 알아가는 방법</div>
            <div className={style.card_content}>
                - 이제 MBTI도 식상한 것 같아요. 그보다 조금 더 자세히 저에 대해 알고 싶어요.<br/>
                - 제가 보는 나와 다른 사람들이 보는 나는 많이 다른 것 같아요. 저는 어떤 사람이죠?<br/>
                - 저도 저를 잘 모르겠어요. 그래서 제 자신과 조금 더 친해지고 싶어요.
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_title}>#인간관계</div>{ TfiApple }
            <div className={style.card_cate}>인간관계를 잘 맺는 사람이 되는 방법</div>
            <div className={style.card_content}>
                - 다른 사람들이 상처 받을까봐 항상 제가 참는편인데, 이제는 그만 참고 싶어요.<br/>
                - 제가 낯을 많이 가려서 처음 보는 사람들과 어떻게 친해져야 할 지 모르겠어요.<br/>
                - 다른 사람들에게 만만하게 보이고 싶지 않아요. 무시받고 싶지 않아요!
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_title}>#멘탈관리</div>
            <div className={style.card_cate}>멘탈을 잘 관리하는 사람이 되는 방법</div>
            <div className={style.card_content}>
                - 스트레스로 인해서 편두통을 달고 살아요. 어떻게 하면 스트레스를 덜 받을까요?<br/>
                - 다른 사람들의 말에 상처를 많이 받아요. 그런 말을 들어도 의연해지고 싶어요.<br/>
                - 저는 끈기와 인내심이 부족한 것 같아요. 끈기와 인내심을 기르고 싶어요!
            </div>
        </div>
    </div>

    <div className={style.cardList}>
    <div className={style.card}>
            <div className={style.card_title}>#계획력&실행력</div>
            <div className={style.card_cate}>바쁘기만한 계획이 아니라 성공하는 계획</div>
            <div className={style.card_content}>
                - 하고싶은건 많은데 제대로 해내는 법을 모르겠어요!<br/>
                - 계획을 어떻게 하는지 잘 모르겠어요. 우선순위를 어떻게 정하죠?<br/>
                - 작심삼일에서 벗어나고 싶어요
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_title}>#성공과 리더쉽</div>
            <div className={style.card_cate}>진정한 성공과 셀프 리더쉽</div>
            <div className={style.card_content}>
                - 진정한 성공이 무엇인지 알고 싶어요.<br/>
                - '나'를 관리하는 방법을 알고 싶어요<br/>
                - 타인을 이끌어가는 힘을 알고 싶어요.
            </div>
        </div>
        <div className={style.card}>
            <div className={style.card_title}>#동기부여</div>
            <div className={style.card_cate}>나만의 에너지를 찾는 동기부여 방법</div>
            <div className={style.card_content}>
                - 열심히는 사는데 동기부여가 안되요. 번아웃이 올까봐 걱정되요<br/>
                - 동기부여가 되지 않아서 시작조차 되지 않아요.<br/>
                - 나만의 동기를 찾고싶어요!.
            </div>
        </div>
    </div>
    </div>
}
// 13분
// age 상수로 나이를 설정한다(임의)
// 19세 이하
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 태그로 출력

import React from 'react';

const _Jsx05 = () => {
  const age = 16;
  const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAdult = age >= 19;
  const isEven = age % 2 == 0;

  const enter = isAdult ? pass : notPass;
  const win = isEven ? lucky : unLucky;

  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default _Jsx05;
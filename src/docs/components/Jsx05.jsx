// 13분
// age 상수로 나이를 설정한다(임의)
// 19세 이하
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 태그로 출력

import React from 'react';

const Jsx05 = () => {
  // const pass = "입장 가능"
  // const notPass = "입장 불가"
  // const lucky = "당첨"
  // const unLucky = "꽝"
  const age = 16;
  const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAdult = age >= 19;
  const isEven = age % 2 == 0;

  const passComponent = <div>{pass}</div>;
  const notPassComponent = <div>{notPass}</div>;
  const luckyComponent = <div>{lucky}</div>;
  const unLuckyComponent = <div>{unLucky}</div>;

  // const enter = isAdult ? pass : notpass;
  const enter = isAdult ? passComponent : notPassComponent;
  // const win = isEven ? lucky : unlucky;
  const win = isEven ? luckyComponent : unLuckyComponent;

  return (
    <div>
     {enter}
     {win}
    </div>
  );
};

export default Jsx05;
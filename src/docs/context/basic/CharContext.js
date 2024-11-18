// A,B,C요소들에게 값을 전달해줄 Context

import React from 'react';

// context 생성
const CharContext = React.createContext({}); // 초기값에 객체를 넣어두면 공간 하나를 생성한 것

export default CharContext; // 외부에서 사용할 수 있도록 내보내주기

// CharContext는 부모인 CharContainer를 감싸야 모두 다 사용할 수 있다.
// CharContext로 감싸러 ChrContainer로 이동
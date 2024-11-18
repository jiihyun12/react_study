import React from 'react';
import FontButtonComponent from './FontButtonComponent';
import FontInputComponent from './FontInputComponent';

// 25분
// #1 : ButtonComponent
// "재미있는 리덕스 수업!"
// 폰트 기본 크기 1rem
// 버튼 1. 2rem으로 변경하기
// 버튼 2. 5rem으로 변경하기

// #2 : InputComponent
// 사용자에게 입력 받은 폰트 사이즈로 폰트크기 변경하기

const FontContainer = () => {
  return (
    <div>
      <FontButtonComponent />
      <FontInputComponent />
    </div>
  );
};

export default FontContainer;
// FontSizeConsumer를 사용하여 부모로부터 전달받은 폰트 크기 값을 표시하고, 버튼을 눌러 폰트 크기를 변경한다.

import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer } from './FontContext';



const ChildContainer = () => {
  return (
    <div>
      <FontSizeComponent /> 
      <FontSizeConsumer>
        {(context) => (
          <>
            <p style={{fontSize : context.state.fontSize }}>중간 ChildContainer</p>   
            <button onClick={() => { context.action.setFontSize("5rem") }}>커지는 버튼</button>
          </>
        )}
      </FontSizeConsumer>
    </div>
  );
};

export default ChildContainer;
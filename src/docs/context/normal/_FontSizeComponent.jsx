// FontSizeConsumer를 사용하여 폰트 크기를 조정하는 버튼을 포함하는 컴포넌트

import React from 'react';
import { FontSizeConsumer } from './FontContext';

const FontSizeComponent = () => {
  return (
  // p태그의 폰트사이즈를 context의 기본 폰트사이즈로 지정하고
  // 버튼을 누르면 0.5rem으로 작아지게 만든다.
  //   <div>
  //     <p>중간 ChildContainer입니다!</p>
  //     <button>작아져라!</button>
  //   </div>
  
  // 의문점
  // 얘네 둘을 묶을 수는 없나???
  //    const FontSizeComponent = () => {
  //      const {fontSize, setFontSize} = FontContext..?
  //    }
  //      return (<><p>중간 컨테이너</p></>)

    <FontSizeConsumer>  {/* FontSizeConsumer는 함수형 자식 컴포넌트를 통해 context 객체를 전달한다. */}    
      {(context) => ( // context 객체는 FontSizeContext에서 제공하는 state와 action을 포함한다.
        <>
          <p style={{fontSize : context.state.fontSize }}>
            중간 ChildContainer
          </p> {/* p 태그의 fontSize 스타일 속성에 
                    context.state.fontSize를 사용하여 현재 폰트 크기를 적용한다.
                    context.state.fontSize는 FontSizeContext에서 관리하는 폰트 크기 상태이다.
                    이 값은 FontSizeProvider에서 제공된 상태이고
                    폰트 크기는 FontSizeProvider의 state에서 제공된 값에 따라 동적으로 변경된다.*/}

          <button onClick={() => { context.action.setFontSize("0.3rem") }}>
            작아지는 버튼
          </button>              
              {/* 버튼을 클릭하면 context.action.setFontSize("0.3rem")가 호출된다.
                  이 함수는 FontSizeProvider에서 제공된 setFontSize 함수를 참조한다.
                  setFontSize("0.3rem")를 호출하면 fontSize 상태가 "0.3rem"으로 변경된다.
                  상태가 변경되면 FontSizeProvider가 감싸고 있는 모든 컴포넌트가 리렌더링된다.
                  즉, 폰트 크기가 변경되면 이 값을 사용하는 모든 컴포넌트에서 폰트 크기가 업데이트된다.*/}
        </>        
      )}
    </FontSizeConsumer>
  );
};

export default FontSizeComponent;

// FontSizeConsumer는 context 값을 받아서, 이를 자식 컴포넌트로 전달하고 있다.
// 그 결과로 p 태그와 button이 렌더링된다.
// p 태그는 현재 폰트 크기를 context.state.fontSize에 맞춰 스타일링하고,
//  버튼을 클릭하면 폰트 크기가 "0.3rem"으로 변경된다.
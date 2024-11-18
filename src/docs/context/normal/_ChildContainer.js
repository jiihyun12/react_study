// FontSizeConsumer를 사용하여 부모로부터 전달받은 폰트 크기 값을 표시하고, 버튼을 눌러 폰트 크기를 변경한다.

import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer } from './FontContext';



const ChildContainer = () => {
  return (
    <div>
      {/*p태그를 context의 기본 크기로 지정하고,
       버튼을 누르면 5rem으로 크기를 키우게 하기 */}
       {/* <FontSizeComponent />
        <div>
          <p>중간 ChildContainer입니다</p>
          <botton>커져라!</botton>
        </div> */}


      {/* 이FontSizeComponent 컴포넌트는 FontSizeContext를 사용하고, 폰트 크기를 변경하는 버튼을 포함한다. */}
      <FontSizeComponent /> 

        {/* FontSizeConsumer컴포넌트는 
            FontSizeContext로부터 폰트 크기(state.fontSize)를 읽어오고, 
            setFontSize 메서드를 사용해 폰트 크기를 변경할 수 있는 액션을 트리거한다. */}
      <FontSizeConsumer>
        {(context) => (
          // console.log(context) // 콘솔에 확인해보면 객체로 들어가있고, 
                              // 키와 벨류로 action : {setFontSize:f}
                              // state : {fontSize: '2rem'}으로 찍혀있는것을 확인할 수 있다.
          <>
              <p style={{fontSize : context.state.fontSize }}>중간 ChildContainer</p>

          {/* 버튼을 클릭하면 setFontSize 액션을 호출하여 폰트 크기를 5rem으로 변경한다.  */}         
              <button onClick={() => { context.action.setFontSize("5rem") }}>커지는 버튼</button>
            </>
        )}
      </FontSizeConsumer>
    </div>
  );
};

export default ChildContainer;
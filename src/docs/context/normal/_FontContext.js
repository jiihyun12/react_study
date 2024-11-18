// 폰트 크기를 저장하고 관리하는 Context를 생성하고, 폰트 크기를 제공하거나 변경하는 기능을 정의한다.

import React, { useState } from 'react';

// FontContext 생성
// 기본 폰트 사이즈 2rem
// 폰트를 변경할 수 있는 setter 메서드

// FontSizeContext에서는 초기 값이 중요한데, 이 초기값은 Context가 처음 생성될 때 사용된다. 
// 이후에 FontSizeProvider 컴포넌트에서 제공되는 실제 값으로 업데이트된다.
const FontSizeContext = React.createContext({ // React에서 Context 객체를 생성하는 함수
  state : { fontSize : "" }, // 현재 폰트 크기 상태
                             // 초기값으로 빈 문자열("")을 주었지만, 실제로는 "2rem"과 같은 기본 폰트 크기를 사용할 예정
                             // 초기값을 빈 문자열로 설정한 이유는 폰트 크기를 설정하기 위한 초기값인데,
                             // 초기 상태값을 설정하고, 이후에 실제 값으로 변경되기 때문이다.
  action : { setFontSize : () => {} } // 폰트 크기를 변경하는 메서드
                                      // 기본적으로 빈 함수(() => {})를 지정
                                      // 이는 나중에 실제로 폰트 크기를 변경하는 로직으로 대체된다.
});

//폰트 크기를 상태로 저장하고, 
// 이를 FontSizeContext.Provider를 통해 하위 컴포넌트들에게 전달한다.
const FontSizeProvider = ({children}) => { // 실제로 폰트 크기를 관리하는 컴포넌트 생성
  const [fontSize, setFontSize] = useState("2rem"); // 기본 폰트 크기 설정
  const value = {
    state : { fontSize },
    action : { setFontSize }
  }

  return (
    // 이 Provider 컴포넌트를 사용하여, value(즉, fontSize와 setFontSize)를 children에 전달한다.
    <FontSizeContext.Provider value={value}> 

    {/* 컴포넌트로 만들 때 provider로 감싸서 
        감싼 하위 요소를children으로 받을거니까
        children을 이곳에 넘겨주면 
        이 친구를 감싸기만하면 상위의 value를 갖고 시작하게된다.
        즉, **FontSizeProvider**로 감싼 하위 컴포넌트들은 
        FontSizeContext.Provider로 제공된 value를 context를 통해 액세스하고, 
        그 값을 읽거나 변경할 수 있다.

        변경된 size는 setter메서드로 제공이 되고
        setter메서드를 이용해서 값을 변경한다면 폰트 사이즈가 변경되고
        폰트 사이즈가 변경되면 리렌더링된다. 
        즉, 폰트 크기는 setFontSize 메서드를 통해 변경될 수 있으며
        폰트 크기 상태가 변경되면 FontSizeProvider를 감싼 모든 컴포넌트가 리렌더링된다. */}

      {children} {/* children은 FontSizeProvider가 감싸는 모든 자식 컴포넌트를 의미한다.
                     이 컴포넌트들은 모두 FontSizeContext에서 제공하는 값을 사용할 수 있다. */}
    </FontSizeContext.Provider>
  )
}

const FontSizeConsumer = FontSizeContext.Consumer; // 폰트 크기(fontSize)와 그 값을 변경하는 메서드(setFontSize)를 
                                                   // 하위 컴포넌트에서 접근할 수 있다.
                                                   // 하위 컴포넌트에서는 FontSizeConsumer를 사용하여 
                                                   // context.state.fontSize 값을 읽고, 
                                                   // context.action.setFontSize를 호출하여 폰트 크기를 변경할 수 있다.

export {FontSizeProvider, FontSizeConsumer, FontSizeContext};
// FontSizeProvider: 폰트 크기를 관리하고 하위 컴포넌트에 값을 제공하는 컴포넌트
// FontSizeConsumer: 하위 컴포넌트에서 FontSizeContext의 값을 읽고, 변경할 수 있는 컴포넌트
// FontSizeContext: createContext()로 생성한 Context 객체 자체. 이 객체는 Provider와 Consumer로 접근 가능
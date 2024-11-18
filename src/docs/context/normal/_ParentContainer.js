// FontSizeProvider를 통해 자식 컴포넌트들에게 폰트 크기와 관련된 상태를 전달한다.

import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';

// 하위 요소에게 context를 제공!
const ParentContainer = () => {
  return (
    <FontSizeProvider> {/* FontSizeProvider는 FontSizeContext.Provider를 사용하여 
                          자식 컴포넌트들에게 폰트 크기 상태(fontSize)와 
                          이를 변경할 수 있는 함수(setFontSize)를 제공한다.
                          이때 자식 컴포넌트들은 FontSizeProvider로 감싸진 상태에서 
                          FontSizeContext의 값을 사용할 수 있게 된다. */}

      <ChildContainer /> {/* FontSizeProvider로부터 제공된 상태를 사용하여 
                             폰트 크기를 표시하고, 변경하는 기능을 구현한다. 
                             
                             컴포넌트로 감싸진 요소인 ChilContainer는 FontContext의 children으로 들어가게된다.
                             이 children 요소는 FontSizeProvider로부터 제공된 value를 받으며, 
                             그 value에는 폰트 크기 상태(fontSize)와 이를 변경할 수 있는 함수(setFontSize)가 포함된다.
                             그 value에는 fontSize의 기본값과 fontSize를 바꿔줄 수 있는 setFontSize가 들어가있다.
                             그래서 context값을 사용할 수 있다.
                             */}
    </FontSizeProvider>
  );
};

export default ParentContainer;

// FontSizeProvider는 FontSizeContext.Provider로 감싸서 하위 컴포넌트들에게 폰트 크기 상태와 변경 메서드를 제공한다.
// ChildContainer는 FontSizeProvider로부터 제공된 value를 사용하여 폰트 크기를 표시하고, 변경할 수 있다.
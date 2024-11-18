import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

// AnimalsProvider 하위 요소에게 context를 제공한다.

// 이 코드 그대로 App에 출력해도 되는것아닌지..?

const AnimalsContainer = () => {
  return (
    <AnimalsProvider>
      <Animals />
    </AnimalsProvider>
  );
};

export default AnimalsContainer;
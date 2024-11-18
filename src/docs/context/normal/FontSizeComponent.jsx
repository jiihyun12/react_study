import React, { useContext } from 'react';
import { FontSizeConsumer, FontSizeContext } from './FontContext';

const FontSizeComponent = () => {
  const {state,action} = useContext(FontSizeContext); 
  
  return (
        <>
          <p style={{fontSize : state.fontSize }}>
            중간 ChildContainer
          </p> 
          <button onClick={() => { action.setFontSize("0.3rem") }}>
            작아지는 버튼
          </button>              
        </>       
  );
};

export default FontSizeComponent;


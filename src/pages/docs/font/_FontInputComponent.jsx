import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputBigger } from '../../../modules/font';

const FontInputComponent = () => {
  const [inputValue, setInputValue] = useState("")
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const dispatch = useDispatch();
  const inputSize = useSelector((state) => state.inputFontSize );

  return (
    <div>
      {inputSize}
      <input type="text" onChange={onChangeInputValue} value={inputValue}/>
      <button onClick={() => { dispatch(inputBigger(inputValue)) }}>사이즈 변경</button>
    </div>
  );
};

export default FontInputComponent;
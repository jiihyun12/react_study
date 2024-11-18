import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/count';

const Counter = () => {
  // store에 있는 값을 접근하기 위한 훅 함수 useSelector();
  // number = 0;
  const number = useSelector((state) => state.number);
  // 액션 발생시키기 위한 훅 함수 useDispatch();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const onChangeToInputValue = (e) => {
    setInputValue(e.target.value);
  }

  console.log(inputValue)

  return (
    <div>
      <h1>{number}</h1>
      <input type="text" onChange={onChangeToInputValue} value={inputValue} />
      <div>
        <button onClick={() => { dispatch(decrease(inputValue)) }}>감소</button>
        <button onClick={() => { dispatch(increase(inputValue)) }}>증가</button>
      </div>
    </div>
  );
};

export default Counter;
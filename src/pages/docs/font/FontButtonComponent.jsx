import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger, bigger5Rem } from '../../../modules/font';

const FontButtonComponent = () => {
  console.log(useSelector((state) => state))
  const fontSize = useSelector((state) => state.font.fontSize);
  const dispacth = useDispatch();
  return (
    <div>
      {fontSize}
      <button onClick={(e) => { dispacth(bigger()) }}>2rem 버튼</button>
      <button onClick={(e) => { dispacth(bigger5Rem() ) }}>5rem 버튼</button>
    </div>
  );
};

export default FontButtonComponent;
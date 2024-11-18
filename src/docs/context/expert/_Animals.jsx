import React, { useContext, useState } from 'react';
import { AniamlsContext } from './AnimalsContext';
import Animal from './Animal';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (context 메서드 insert 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드를 remove 사용)

// state는 동물 목록을, actions는 동물을 추가, 삭제하는 함수를 비구조화할당해서 가져옴
// inputValue는 사용자가 입력하는 동물 이름을 관리하는 state
// onChangeInputValue: 입력창에 값이 변경될 때마다 inputValue 상태를 업데이트
// onKeyDownAddAnimal: 엔터 키를 누르면 actions.insert() 함수를 호출
// 입력된 동물 이름을 동물 목록에 추가

// state.animals 배열을 map으로 돌려서 각 동물을 버튼으로 표시
// 각 버튼을 클릭하면 actions.remove(i)를 호출하여 해당 인덱스의 동물을 삭제

// 입력값이 바뀔 때마다 onChangeInputValue가 호출
// 엔터 키를 누르면 onKeyDownAddAnimal이 호출
// Animal 컴포넌트는 state와 actions를 받아 동물 목록을 렌더링
const Animals = () => {

  const {state, actions} = useContext(AniamlsContext)
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const onKeyDownAddAnimal = (e) => {
    if(e.key === 'Enter'){
      actions.insert(inputValue)
    }
  }

  const animalList = state.animals.map((animal, i) => (
    <li key={i}><button onClick={() => { actions.remove(i) }}>{animal}</button></li>
  ))

  // Animal로 state와 action을 넘겨서 리스트로 화면에 출력하기
  return (
    <ul>
      <input type="text" onChange={onChangeInputValue} onKeyDown={onKeyDownAddAnimal}/>
        <Animal state={state} actions={actions}/>
    </ul>
  );
};

export default Animals;
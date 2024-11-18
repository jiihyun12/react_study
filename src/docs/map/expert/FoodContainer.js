import React, { useRef, useState } from 'react';

// expert 실습
// 한국음식, 영어음식 이름을 추가하고 해당 음식을 선택해서 삭제하는 로직 만들기

const FoodContainer = () => {
  const [foods, setFoods] = useState([]); // 음식 목록
  const [checked, setChecked] = useState([]) // 각 음식 체크 상태

  const inputRef = useRef([]); // 클릭 버튼과 input은 서로 관계가 없으므로 
                              // 두 개의 입력필드를 참조하기위해 레퍼런스를 사용한다.
  
  const onClickToAddFood = () => { // 새로운 음식 추가 버튼 클릭시 실행
      setFoods( // foods의 상태를 업데이트
        foods.concat({ // foods 배열에 새로운 음식 객체 추가
          kor : inputRef.current[0].value, // 첫번째 입력필드(한국음식이름)
          eng : inputRef.current[1].value, // 두번쨰 입력필드(영어음식이름)
        })
      )
      setChecked(checked.concat(false)); // 기존의 checked 배열에 false값을 추가하여 새로운 배열을 만들어
                                          // 새로 추가된 음식에 대한 체크 상태를 false로 만든다.
                                          // 사용자가 방금 추가한 음식은 기본적으로 체크되지 않은 상태로 시작하게된다.
  }

  const onChangeCheckBox = (i) => { // 사용자가 체크박스를 클릭할 때 
    checked.splice(i, 1, !checked[i]) // 체크박스의 인덱스(i) 위치에 있는 요소를 하나 제거(1)하고,
                                      // 반전된 값(!checked[i])으로 교체한다.
                                      // 즉, 현재 체크 상태를 반전시킨다.
    setChecked(checked.concat()); // 기존 checked배열의 복사본을 만들어서 새로운 배열로 setChecked에게 전달한다.
  }

  const onClickToRemoveFood = () => { // 사용자가 삭제 버튼을 클릭할 때
    setFoods(foods.filter((food, i) => !checked[i])) // 체크상태가 false인 요소만 남긴다.
    setChecked(new Array(foods.length).fill(false)) // 현재 음식 목록의 길이에 맞춰 새로운 배열을 만들고,
                                                    // 모든 요소를 false로 초기화한다.
  }

  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}> {/* 각 음식에 대해 li요소를 생성한다. */}     
        <input type="checkbox" checked={ checked[i] } onChange={() => onChangeCheckBox(i)} />
                                      {/* 체크박스를 클릭할 때마다 onChange이벤트가 발생하고, 
                                          onChangeCheckBox(i)가 호출되어 
                                          해당 인덱스의 체크 상태를 변경한다. */}  
        {`${kor}(${eng})`}
      </li>
    )
  })

  return (
    <div>
      <div>
        <input ref={(el) => { inputRef.current[0] = el }} type="text" placeholder='한국 음식 이름'/>
        <input ref={(el) => { inputRef.current[1] = el }} type="text" placeholder='영어 음식 이름'/>
      </div>
      <div>
        <button onClick={onClickToAddFood}>추가</button>
        <button onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        {foodList} 
        {/* 생성된 음식 목록 렌더링 */}
      </div>
    </div>
  );
};

export default FoodContainer;


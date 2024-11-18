import React from 'react';

// 넘긴 state와 actions를 받는다.
// 콘솔로 확인한다.
const Animal = ({state, actions}) => {
// console.log(state, actions)

// state가 객체로 들어왔으니 
// 거기에 있는 key값을 비구조화할당해서 변수로 사용한다.
// 이 animals는 배열이니 반복문을 돌릴 수 있다.
// react에서는 상태가 바뀌어야하는데 forEach는 리턴값이 없으니 상태가 바뀌지않아서 map을 사용
// map을 사용하여 값을 받아서 돔을 만들어 사용한다.
// actions context에 들어가있는 remove라는 메서드를 인덱스값으로 넘겨서 context값에 들어가있는 index와 i값을 비교해서 없앴다.
const {animals} = state;
const { remove, insert } = actions;

 const animalList = animals.map((animal, i)=> (
    <li key={i}>
        <button onClick={()=>{ remove(i) }}>{animal}</button>
    </li>
 ))
 return (
    <div>
        {animalList}
    </div>
 )
};

export default Animal;







import { createContext, useState } from "react";


// 컨텍스트 생성 및 초기화
// createContext()로 새로운 Context 객체를 만든다.
// 초기값 배열로 들어가는 값이 있고 이것은 어떠한 상태(state)가 된다.
// 그 상태를 바꿀 수 있는 remove와 insert action이 들어간다.
const AniamlsContext = createContext({  
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
});


// Provider 생성
// useContext를 사용하므로 consumer는 필요 없다.
// children을 props로 받아, 하위 컴포넌트들에게 컨텍스트 값을 제공한다.
// useState()로 동물 리스트를 관리한다.
// animals 리스트 초기값 ["누렁이", "야옹이", "점박이"]

// insert: 새로운 동물을 배열에 추가하는 함수
// concat() 메서드를 사용하여 기존 배열에 동물을 추가
// remove: 특정 인덱스에 해당하는 동물을 배열에서 제거하는 함수
// filter()를 사용하여 인덱스가 일치하지 않는 동물만 새로운 배열로 반환

// value 객체에 state (동물 목록)와 actions (동물 추가,삭제하는 함수)를 담아 
// AniamlsContext.Provider의 value로 전달
// children 컴포넌트들이 이 값을 useContext로 접근할 수 있게 된다.
// children은 AnimalsContainer 컴포넌트를 의미
const AnimalsProvider = ({children}) => {
  const [animals, setAniamls] = useState(["누렁이", "야옹이", "점박이"]);

  const insert = (animal) => { setAniamls(animals.concat(animal)) };
  const remove = (i) => { setAniamls(animals.filter((animal, index) => i !== index)) };

  const value = {
    state : { animals : animals },
    actions : { insert : insert, remove : remove }
  }
  return (
    <AniamlsContext.Provider value={value}>
      {children}
    </AniamlsContext.Provider>
  )
}

export { AniamlsContext, AnimalsProvider };



// 버튼을 눌렀을 때 삭제하는 remove라는 메서드 생성
// 화면에서 동물을 입력 받았을 때 추가하는 insert라는 메서드 생성



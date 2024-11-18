import { createContext, useState } from "react";


// 컨텍스트 생성 및 초기화
// 초기값 배열로 들어가는 값이 있고 이것은 어떠한 상태(state)가 된다.
// 그 상태를 바꿀 수 있는 remove와 insert action이 들어간다.
const AniamlsContext = createContext({
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
});

// Provider 생성
// useContext를 사용하므로 consumer는 필요 없다.
// animals 리스트 초기값 ["누렁이", "야옹이", "점박이"]
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



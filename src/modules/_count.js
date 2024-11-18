import { createAction, handleActions } from 'redux-actions';


// type 생성
// Redux에서 액션 타입(action type) 은 보통 문자열 상수로 정의한다.
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action 생성
// action creator 함수는 컴포넌트에서 호출된다.
// 액션 생성 함수는 컴포넌트에서 호출되어 액션을 발생시키기 위해 사용된다.
// 다른 파일에서 이 액션을 사용하려면 export를 통해 외부에서 사용할 수 있도록 내보내야한다.
export const increase = createAction(INCREASE); // 액션 생성 함수는 컴포넌트에서 호출되어 액션 객체를 생성한다.
                                                // 액션 객체에는 type과 payload가 포함되며,
                                                // type은 액션의 종류를 나타내는 고유한 식별자이다.
export const decrease = createAction(DECREASE);

// state 초기화 생성
const initialState = {
  number : 0
}

// reducer 생성
// const reducer = (state, action) => {
//   switch(action.type){
//     case INCREASE :
//       action.setNumber(state.number + 1);
//       break;
//     case DECREASE :
//       action.setNumber(state.number - 1);
//       break;
//     default :
//       break;
//   }
// }

const count = handleActions({
  [INCREASE] : (state, action) => ({number : state.number + 1 + parseInt(action.payload) }),
  [DECREASE] : (state, action) => ({number : state.number - 1 + Number(action.payload) })
}, initialState)
// initialState는 리듀서의 기본 상태를 지정한다. 여기서는 number: 0이다.

export default count;

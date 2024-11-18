import { createAction, handleActions } from 'redux-actions';


// type 생성
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action 생성
export const increase = createAction(INCREASE);
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

export default count;

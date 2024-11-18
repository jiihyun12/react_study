import { createAction, handleActions } from "redux-actions";

// type 생성
const BIGGER = "font/BIGGER";
const BIGGER_5REM = "font/BIGGER_5REM";
const INPUT_BIGGER = "font/INPUT_BIGGER";

// action 생성
export const bigger = createAction(BIGGER);
export const bigger5Rem = createAction(BIGGER_5REM);
export const inputBigger = createAction(INPUT_BIGGER);

// initialState 초기값 생성
const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem"
}

// reducer 생성
const font = handleActions({
  [BIGGER] : (state, action) => ({...state, fontSize : "2rem"}),
  [BIGGER_5REM] : (state, action) => ({...state, fontSize : "5rem"}),
  [INPUT_BIGGER] : (state, action) => ({...state, inputFontSize : action.payload })
}, initialState)

// reducer 내보내기
export default font;
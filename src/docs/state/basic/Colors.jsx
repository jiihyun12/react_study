// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자색을 없앤다.

// color를 바꿔서 바뀐 color를 결과가 사용해야하니 
// 상태가 두 개 필요하다.

import React, { useState } from 'react';

const Colors = () => {

    const [result, setResult] = useState("");
    const [color, setColor] = useState("");

    const onClickToColorRed = () => {setColor("red")}
    const onClickToColorBlue = () => {setColor("blue")}
    // console.log(color) // 1. 콘솔로 확인해보니 color의 state값이 바뀌는것을 확인할 수 있다.

    const onChangeToInpusValue = (e) => {
        console.log(e.target.value) // onChange가 됐을 때 확인용 콘솔
        if(e.target.value === "핑크색"){ setColor("") } // 4. 핑크색 비교
        return setResult(e.target.value)
    }
    console.log(color) // color 확인용 콘솔

    return (
        <div>
            <p style={{color}}>{result}</p> {/* 3. style을 객체로 넘긴다. */} 
            <input type="text" onChange={onChangeToInpusValue}/> {/* 2.  input의 onChange 이벤트 발생 시 값을 setResult에 설정하여 p 태그에 반영한다. 
                                                                     
                                                                     이벤트가 발생하면 함수를 호출하고
                                                                     사용자가 입력한 값을 setResult에 넣어서 
                                                                     result가 값이 바뀌면 p태그의 result로 값을 넣어준다. */}
            <button onClick={onClickToColorRed}>빨간색</button>
            <button onClick={onClickToColorBlue}>파란색</button>
        </div>
    );
};

export default Colors;
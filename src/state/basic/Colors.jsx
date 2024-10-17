import React, {useState} from 'react';

const Colors = () => {
    // 빨간색 버튼을 누르면 글자 색을 빨갛게
    // 파란색 버튼을 누르면 글자 색을 파랗게
    // 핑크색 버튼을 누르면 글자 색을 없앤다.

    const [result, setResult] = useState("");
    const [color, setColor] = useState("");

    const onClickToColorRed = () => {
        setColor("red")
    }

    const onClickToColorBlue = () => {
        setColor("blue")
    }

    onChangeToInputValue = (e) => {
        console.log(e.target.value)

        if(e.target.value==="핑크색"){setColor("")}
        return setResult(e.target.value)
    }
    console.log(color)

    return (
        <div>
            <p style={{color : color}}>{result}</p>
            <button onClick={onClickToColorRed}>빨간색</button>
            <button onClick={onClickToColorBlue}>파란색</button>
            <input type="text" onChange={onChangeToInputValue}  />
        </div>
    );
};

export default Colors;
import React, { useRef, useState } from 'react';

const Name = () => {
    // 사용자가 입력한 이름을 p태그에 실시간으로 작성하고
    // 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
    // 입력 후 엔터를 누르면 p태그에 반영

    const [result, setResult] = useState("");
    const inputRef = useRef();

    const onchangeToInput = (e) => { 
        setResult(e.target.value)
    }

    const onClickToSorry = () => {
        setResult(result + "님")
       setResult(inputRef.current.value.replaceAll("님","") + "님");
    }

    return (
        <div>
            <p> {result} </p>
            <input ref={inputRef} value={result} type="text" onChange={onchangeToInput} onKeyDown={(e)=>{console.log(e)}}/>
            <button onChange={onClickToSorry}> 버튼</button>
        </div>
    );
};

export default Name;
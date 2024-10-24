import React, { useRef, useState } from 'react';

const Name = () => {
    // 사용자가 입력한 이름을 p태그에 실시간으로 작성하고 
                                    // 엔터를 치는 순간 작성되어야하니까 상태가 필요하다. 

    // 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
                                    // 
                                    
    // 입력 후 엔터를 누르면 p태그에 반영

    const [result, setResult] = useState("");
    const inputRef = useRef(); // 

    const onchangeToInput = (e) => { 
        // console.log(e) // 이벤트 객체가 어떻게 들어오는지 확인
                      // enter를 눌렀을 떄는 변화가 없기 때문에 onChange는 반응을 할 수 없다.
                      // key이벤트를 사용하면 반응한다. 
                      // key 이벤트 프로퍼티를 보면 Enter가 key:Enter로 들어가있는것을 볼 수 있다.
        setResult(e.target.value) 
    }

    const onClickToYou = () => { // 버튼을 클릭하면 뒤에 "님"이 붙게 한다.
        // setResult(result + "님")
       setResult(inputRef.current.value.replaceAll("님","") + "님"); // 콘솔에 inputRef를 찍어보니 
                                                                    // 객체 key값의 current에 input이 들어가있고
                                                                    // input안의 value에 값이 들어가있다.
                                                                    
                                                                    // replaceAll을 사용하여 사용자가 입력한 값에서"님"을 살제하고
                                                                    // 다시 추가한다. 
                                                                    // 사용자가 "님"을 여러 번 입력했더라도 
                                                                    // 중복된 "님"을 제거하고, 마지막에 하나만 붙도록 한다.
                                                                   
    }

    return (
        <div>
            <p> {result} </p> 
            <input 
            ref={inputRef} 
            value={result} 
            type="text" 
            onChange={onchangeToInput} 
            onKeyDown={(e)=>{console.log(e)}}/>
            <button onClick={onClickToYou}>"님" 버튼</button>
        </div>
    );
};

export default Name;
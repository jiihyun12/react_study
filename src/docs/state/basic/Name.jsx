import React, { useState } from 'react'; // 7. useState import해주기

const Name = () => {
    // 6. useState를 사용할 때 상태 변수로서 result가 필요하므로, 초기값을 설정한다.
    const [result, setResult] = useState(""); // 상태를 관리하기 위해 useState를 사용한다.
                                             // result를 사용할 것이다.
                                             // result를 바꿀 수 있는 setter가 필요하다(setResult)

    const onChangeInputValue = (e) => {  
        // 1. input이 onChange가 됐을 때 event객체를 받는다.
        // 2. 값이 바뀌면 이벤트가 발생하고, 이벤트는 함수에서 받는다.
        // console.log(e); // 3. 콘솔로 보니 값이 바뀌었을 때 이벤트가 발생하고,
                        // 4. 객체를 확인해보니 target: input이고 value가 "값"을 들고 있는 것이 확인된다.
        // console.log(e.target.value); // 5. e.target.value를 통해 입력된 값을 확인할 수 있다.

        setResult(e.target.value); // 8. setResult를 통해 상태가 업데이트되어 값들이 들어가면서 result의 값을 바꿔준다.
    }
    
    return (
        <div>
            <p>{result}</p> 
            <input type="text" onChange={onChangeInputValue}/> 
        </div>
    );
};

export default Name;

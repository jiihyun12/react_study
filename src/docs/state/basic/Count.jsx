// 버튼을 클릭하면 +1, -1이 되도록 만들기

import React, { useState } from 'react';

const Count = () => {

    // let number = 0;

    // useState() // 상태를 바꾸기 위한 훅
    // console.log(useState) // 콘솔에 확인해보니 배열의 형태로 들어온다.
                             // 배열은 비구조화 할당이 가능하다.

    // const [number, setNumber] = useState();
                                    // useState는 두 개의 값을 포함하는 배열을 반환한다.
                                    // 현재 상태, 이 상태를 업데이트할 수 있는 setter함수
                                    // 이 setter 함수를 호출하면 리액트가 상태를 업데이트하고, 
                                    // 컴포넌트를 다시 렌더링하여 변경된 상태를 반영한다.

                                    // 현재 코드에서
                                    // number : 현재 상태 값
                                    // setNumber : 상태를 업데이트하는 함수      
                                    // 현재 number에 초기값이 없다. 이러면 상태가 undefined가 된다.
                                    // useState()에 값을 지정한 후 매개변수로 넘겨주면 초기값이 된다.
                                    
const [number, setNumber] = useState(10);

    const decrease = () => {
        console.log(number)
        setNumber(number -1) // setter함수를 호출하면 상태가 변경된다.
                            // setter함수를 사용할 때 매개변수로 value를 넘겨주면 그 값으로 바꿔준다.
                            // number의 기존 값에 -1을 한다.
                            // 상태가 바뀌었으므로 버추얼돔이 감지할 수 있다.
    }

    const increase = () => {
        console.log(number)
        setNumber(number +1)
    }

    return (
        <div>
            <button onClick={decrease}>-1 감소</button>
            {number}
            <button onClick={increase}>+1 증가</button>
        </div>
    );
};

export default Count;
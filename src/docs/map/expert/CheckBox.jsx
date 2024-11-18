import React, { useState } from 'react';

const CheckBox = () => {

    const [message, setMessage] = useState([]); // 여러개를 넣어야하므로 초기값을 배열로 둔다.

    const onClickToCheck = (e) => { // 체크박스가 클릭될 대 실행될 함수
        let value = e.target.value; // 클릭한 체크박스의 값을 변수에 저장
        if(e.target.checked){ // 체크박스가 선택되었다면
            setMessage(message.concat(e.target.value)) // 현제의 message 배열에 
                                                       // 클릭한 체크박스의 값을 추가한다.
                            // push는 같은 주소값에 추가하는것이기때문에 상태가 바뀌지 않으므로 
                            // 새 배열을 생성하는 concat을 사용한다.
            // setMessage([...message, value]) // spread문법으로 상태를 업데트할수도 있다.
                                            // spread문법은 주소값까지 복사되는 깊은복사가 된다.
                                            // ES6 문법이기때문에 호환성 문제로 바벨(다운그레이딩)과정이 필요하다.
        } else{ // if(e.target.checked)조건이 false일 때 실행
            setMessage(message.filter((m)=> m !== value)) // filter메서드의 콜백함수는 
                                                          // message배열의 각 요소(m)에 대해 실행된다.
                                                          // 현재 효소 m이 클릭한 체크박스의 값value와 같지 않으면
                                                          // true를 반환한다.
                                                          // 즉, 현재 요소가 체크 해제된 체크박스의 값이 아닐 때만
                                                          // 새로운 배열에 포함된다.
        }
       
    };

    return (
        <div>
            <div>
                <span>front-end</span>                
                <input type="checkbox" value="front-end" onClick={onClickToCheck}/>                                                                                   
            </div>

            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck}/>
            </div>

            <div>
                <span>AI</span>
                <input type="checkbox" value="AI" onClick={onClickToCheck}/>
            </div>

            <div>
                <h1>{message.map((message,i)=> <p key={i}>{message}</p>)}</h1> 
                {/* map으로 message배열을 순회하며 message배열의 각 요소를 p태그로 감싸서 출력한다.
                    key={i}는 리액트에서 리스트를 렌더링할 때 각 요소를 고유하게 식별하기 위한 속성이다.
                    key 속성이 없으면, 리액트가 어떤 요소가 추가되거나 제거되었는지 추적하는 데 어려움을 겪을 수 있다.
                    인덱스를 사용하지만, 배열의 순서가 바뀌지 않는 경우에만 사용해야 한다.*/}
            </div>
        </div>
    );
};

export default CheckBox;
import React, { useState } from 'react';

const CheckBox = () => {

    const [message, setMessage] = useState([]);

    const onClickToCheck = (e) => {
        let value = e.target.value;
        if(e.target.checked){
            setMessage(message.concat(value)) // push는 같은 주소값에 추가하는것이기때문에 상태가 바뀌지 않는다.
            // setMessage([...message, value]) // spread문법은 주소값까지 복사되는 깊은복사가 되므로 사용할 수 있다.
                                            // 다만, ES6 문법이기때문에 배포할 때 바벨(다운그레이딩)과정이 필요하다.
        } else{
            setMessage(message.filter((m)=> m !== value)) 
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
            </div>
        </div>
    );
};

export default CheckBox;
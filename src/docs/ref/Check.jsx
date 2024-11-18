import React, { useRef } from 'react';

const Check = () => {

    const inputRef = useRef([]);
    const formRef = useRef();

    const onClickToCheck = () => {
        // console.log(inputRef) // 배열

        // 빈 값 검사하기
        // 배열이므로 반복문을 돌린다.
        for(let input of inputRef.current){
            if(!input.value){
               alert(`${input.name}를 입력하세요`)
                return;
            }
        }
        formRef.current.submit();
      };
    
    return (
        <div>
            <form ref={formRef}>
                <div>
                    <span>아이디</span>
                    <input type="text" name="id" ref={(element)=>{inputRef.current[0] = element}}/>
                </div>
                <div>
                    <span>비밀번호</span>
                    <input type="text" name="password" ref={(element)=>{inputRef.current[1] = element}} />
                </div>
                <button type="button" onClick={onClickToCheck} >전송</button>
            </form>
        </div>
    );
};

export default Check;
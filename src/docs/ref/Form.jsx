import React from 'react';

// CheckInput에서 props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
const Form = ({style, inputRef, formRef, onClickToButton}) => { // props로 받아서 비구조화할당한다.

    // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 호출
    const onClickToButtons = () => { // 버튼 클릭 시 유효성 검사 함수 호출
        onClickToButton(); 
    };

    return (
        <form ref={formRef} style={style}> {/* ref와 스타일을 적용시킬 폼 */}
            <div>
            <span>이메일</span>
            <input type="text" name='email' ref={(el) => inputRef.current[0]= el} /> {/* 레퍼런스에 element를 받아서 
                                                                                         인풋레퍼런스의 current의 0번째 방에
                                                                                         element를 넣는다. */}
            </div>

            <div>
            <span>비밀번호</span>
            <input type="text" name='password' ref={(el) => inputRef.current[1]= el}  />
            </div>

            <div>
            <span>이름</span>
            <input type="text" name='name' ref={(el) => inputRef.current[2]= el}  />
            </div>

            <div>
            <span>나이</span>
            <input type="text" name='age' ref={(el) => inputRef.current[3]= el}  />
            <button type="button" onClick={onClickToButtons}>입력 완료</button> {/* 태그 안에서 button은 submit형태이므로 
                                                                                 button 타입으로 바꾼다.
                                                                                 클릭을 했을 때  폼태그에 서브밋을 보낸다.*/}
            </div>
        </form>
    );
};

export default Form;

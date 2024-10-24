import React from 'react';

// CheckInput에서 props로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 검사
const Form = ({style},{inputRef},{formRef}, {onClickToButton}) => {

    // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 호출
    const onClickToButtons = () => {

    };

    return (
        <form ref={formRef} style={style}>
            <div>
            <span>이메일</span>
            <input type="text" name='email' ref={(el) => inputRef.current[0]= el} />
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
            <button type="button" onClick={onClickToButtons}>입력 완료</button>
            </div>
        </form>
    );
};

export default Form;

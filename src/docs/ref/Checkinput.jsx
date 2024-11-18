import React, { useRef } from 'react'; // useRef 훅 임포트
import Form from './Form'; // from 컴포넌트 임포트

const Checkinput = () => { // Sheckinput 컴포넌트 정의

    const style = { // Form의 스타일 객체 정의
        display : "flex",
        flexDirection : "column",
        width : "200px"
    }

    // inputRef를 전달
    const inputRef = useRef([]); 

    // formRef를 전달
    const formRef = useRef(null);

    // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달
    const onClickToButton = () => { 
        // console.log("버튼클릭");
        for(let input of inputRef.current) { // iputRef의 current 배열 반복문 돌려서 
            if(!input.value){ // 입력값이 비어있으면
                alert(`${input.name}값을 입력해주세요`) // 사용자에게 경고창으로 입력을 요청한다.
                return // 입력이 비어있으면 더이상 진행하지 않는다.
            }
        }
        formRef.current.submit(); // 모든 입력이 유효할경우 폼 제출
    };
       

    return (
        <div >
            <Form style={style} 
            inputRef={inputRef}             
            formRef={formRef}
            onClickToButton={onClickToButton} // 유효성 검사 함수
            />
        </div>
    );
};

export default Checkinput;
import React, { useRef } from 'react';
import Form from './Form';

const Checkinput = () => {

    const style = {
        display : "flex",
        flexDirection : "coloumn",
        width : "200px"
    }

    // inputRef를 전달
    const inputRef = useRef([]); 

    // formRef를 전달
    const formRef = useRef(null);

    // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달
    const onClickToButton = () => {      
        for(let input of inputRef.current) {
            if(!input.value){
                alert(`${input.name}값을 입력해주세요`)
            }
            formRef.current.submit();
        }
    }
    

    
  


    return (
        <div >
            <Form style={style} 
            inputRef={inputRef}             
            formRef={formRef}
            onClickToButton={onClickToButton}
            />
        </div>
    );
};

export default Checkinput;
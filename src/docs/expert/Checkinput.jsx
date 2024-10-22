import React from 'react';
import Form from './Form';

const Checkinput = () => {

    const style = {
        display : "flex",
        flexdirection : "coloumn",
        width : "200px"
    }

    // inputRef를 전달
    // formRef를 전달
    // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달

    return (
        <div>
            <Form />
        </div>
    );
};

export default Checkinput;
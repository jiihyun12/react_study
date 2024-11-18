import React from 'react';
import S from '../style';

const Styled02 = () => {

    // strong, p
    // strong : 컴포넌트를 정의할 때 props로 글자 크기를 30px로 지정
    // p : 컴포넌트를 정의할 때 props로 폰트 굵기는 bold로, color를 orange로 지정
    return (
        <div>
            <S.Strong fontSize={"30px"}>strong font-size 30px</S.Strong>
            <S.P color={"orange"} fontWeight={"bold"}>bold, orange</S.P>
        </div>
    );
};

export default Styled02;
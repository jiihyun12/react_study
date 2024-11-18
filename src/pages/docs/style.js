import styled from 'styled-components';
import { boxStyle, flexCenter, flexCenterColumn } from '../../global/common';
import { fadeIn } from '../../styles/keyFrames';

// Styled파일이 진짜 스타일인지 구별하기 어려우니까
// style파일에서 S를 만들어서 S.으로 적용
const S = {};

// Styled01.jsx
S.StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px #000000;
`;

S.StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor};
    border: none;
`

S.Input = styled.input`
width: 200px;
height: 200px;
border: solid 1px green;
color: ${(props)=>props.color}`



// Styled02.jsx
S.Strong = styled.strong`
   font-size: ${(props)=>props.fontSize};
   /* font-size: ${({fontSize})=>fontSize}; // 비구조화 할당으로도 사용 가능 */
`;

S.P = styled.p`
    font-weight: ${(props)=> props.fontWeight};
    /* font-weight: ${(props)=> props?.fontWeight}; // 옵셔널 체이닝으로 처리도 가능 */
    color: ${(props)=>props.color};
`;


// Styled03.jsx
S.Wrap = styled.div`
${flexCenterColumn}

// 자기 자신을 선택하는 연산자 &
// & span은 S.Wrap 컴포넌트 내부의 모든 span 요소를 선택한다.
// 즉, S.Wrap의 스타일을 정의할 때 
// 그 내부에 있는 span이나 button에 별도로 스타일을 지정할 수 있게 해준다.
// 중첩된 스타일을 작성할 때 유용하며, 
// 컴포넌트의 구조를 유지하면서 그 안의 특정 요소에 대한 스타일을 쉽게 적용할 수 있게 도와준다.
    & span { 
        color: green;
    }

    & button {
        width: 100%;
        /* border: 1px solid green;
        background-color: palegreen; */
    }
`


// Styled04.jsx
S.Box = styled.div`
${boxStyle}
${flexCenter}
justify-content: center;

    & p {
        /* 테마가 정의한 폰트로 폰트 크기를 정의 */
        font-size: ${({theme})=>theme.FONT_SIZE["h1"]};

        /* font-size: 25px; */
        font-weight: 700;
        animation: ${fadeIn} 1s forwards ease-in;
    }`


export default S;
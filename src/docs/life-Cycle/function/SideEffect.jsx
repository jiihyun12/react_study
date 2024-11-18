import React, { useEffect, useState } from 'react';

const SideEffect = () => {

    const [number, setNumber] = useState(0); // 클릭할 때마다 증가하는 숫자
    const [color, setColor] = useState(""); // 랜덤 색상 저장

    const getRandomColor = () => { // 16진수로 랜덤 색상 생성
        return "#" + Math.floor( Math.random() * 16777215 ).toString(16);
    }

    const onClickToChangeColor = () => { // 색상 변경 버튼 클릭 시 랜덤 색상을 확인하여 
                                         // color 상태를 업데이트한다.
        setColor(getRandomColor())
    }

    // <button onClick={serNumber(number +1)}>+1 증가</button>
    // 함수 분리
    const onClickToIncrease = () => { // 증가 버튼 클릭 시 number를 1 증가시킨다.
        setNumber(number + 1)
    }
    // const onClickToIncrease = () => {
    //     setNumber((prev)=>{
    //         console.log(prev, "이전 값")
    //         return number +1;
    //  })
    // }

    // useEffect(()=>{
    //     console.log("리랜더링")
    // }, []) // 한 번만 랜더시키기위해 의존성 배열 추가 
              // 최초 한 번 무언가를 할 때 사용(팝업같은거)

    useEffect(()=>{
        console.log("리랜더링") // number가 변경될 때마다 콘솔에 리렌더링 메세지 출려
    }, [number]) // number에 대한 의존성 설정. number가 업데이트될 때마다 실행됨

    console.log(color)

    return ( 
        <div>
            <h1 style={{color}}>{number}</h1>
          {/* <button onClick={serNumber(number +1)}>+1 증가</button>   */}
          <button onClick={onClickToIncrease}>+1 증가</button>  
          <button onClick={onClickToChangeColor}>색상 변경</button>
        </div>
    );
};

export default SideEffect;
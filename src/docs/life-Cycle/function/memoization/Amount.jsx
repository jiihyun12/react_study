import React from 'react';


const Amount = ({ // props를 받아서 렌더링한다.
    divStyle,
    pStyle,
    buttonStyle,
    props,
    onClickToAddAmount,
    onClickToSubtractAmount,
    onClickToAddCoupon,
    onClickToSubtractCoupon
}) => {
    console.log("자식(Amount) 랜더링") // 자식 컴포넌트가 렌더링될 때 메세지 출력
    
    const {amount, coupon} = props; // props에서 amount와 coupon을 추출하여 구조분해할당한다.

    return (
        <div style = {divStyle}> 
            <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
            <p style={pStyle}>수량 : {amount} </p>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
            <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
            <p style={pStyle}>쿠폰 : {coupon} </p>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
        </div>
    );
};

export default Amount;
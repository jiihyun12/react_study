import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {
  console.log("부모(Product) 렌더링") // 렌더링될 때마다 메세지 출력

  const containerStyle = {
    width : "500px",
    hegith : "300px",
    margin : "20px auto"
  };

  const productStyle = {
    border : "1px solid lightgray",
    padding : "30px",
    lineHeight : "1.3"
  };

  const divStyle = {
    border : "1px solid blue",
    height : "60px",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    marginTop : "20px",
    padding : "20px",
  };

  const pStyle = { 
    lineHeight : 0 
  };

  const buttonStyle = { 
    width : "40px", 
    height : "40px" 
  };

  // 상태 초기화
  const [like, setLike] = useState(0); 
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState(0);


  // // useMemo를 사용하여 계산된 값을 캐시에 저장한다.
  // amountMemo와 couponMemo는 각각 amount와 coupon이 변경될 때만 다시 계산된다.
  const amountMemo = useMemo(()=>{ 
    console.log("amount연산");return amount;
  },[amount])

  const couponMemo = useMemo(()=>{
    console.log("coupon연산");return coupon;
  },[coupon])

  const props = { amount: amountMemo, coupon: couponMemo }

  // useCallback
  // useMemo 값을 캐시에 저장
  // useCallback 함수를 캐시에 저장

  // useCallback으로 콜백 함수를 메모이제이션하여 불필요한 재생성을 방지한다.
// 각 함수는 버튼 클릭 시 해당 상태를 업데이트하며, 상태 값에 따라 의존한다.
  const onClickToAddAmount = useCallback(() => { setAmount(amount + 1) },[amount]);
  const onClickToSubtractAmount = useCallback(() => { setAmount(amount - 1) },[amount]);
  const onClickToAddCoupon = useCallback(() => { setCoupon(coupon + 1) },[coupon]);
  const onClickToSubtractCoupon = useCallback(() => { setCoupon(coupon - 1) },[coupon]);

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 재용이가 알려주는 건물 하나 사서 팔아서 부자되기</p>
        <button onClick={() => {setLike(like + 1)}}>좋아요 {like}</button>
        <Amount
          divStyle={divStyle}
          pStyle={pStyle}
          buttonStyle={buttonStyle}
          props={props}
          onClickToAddAmount={onClickToAddAmount}
          onClickToSubtractAmount={onClickToSubtractAmount}
          onClickToAddCoupon={onClickToAddCoupon}
          onClickToSubtractCoupon={onClickToSubtractCoupon}
        />
      </div>
    </div>
  );
};

export default ProductContainer;

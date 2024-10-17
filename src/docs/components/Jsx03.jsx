// 실습
// name 과 message를 넣어서 랜더링하기
// name : 이름, message : 환영합니다

export default function(){
    const name = "함지현";
    const message = "환영합니다";
    return (
        <div>
             {message} 
             <p style={{color : "blue"}}>제 이름은 {name}입니다.</p>
        </div>
    )

}
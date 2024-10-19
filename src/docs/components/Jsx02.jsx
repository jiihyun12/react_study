// 리액트의 연산
// react 컴포넌트 내부에서 변수를 사용할 때는 중괄호를 사용한다.

// react()안에서는 html이기때문에 연산이 안 된다.
// 연산을 하기 위해서는 {} 중괄호 묶어줘야한다.

export default function Jsx02(){
    const name = "함지현";
    return (
        <div>
            제 이름은 {name}입니다.
        </div>
    )
}

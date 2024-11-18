import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

const getRandomColor = () => {
    return "#" + Math.floor( Math.random() * 16777215 ).toString(16);
            // 1677215는 16진수 코드의 경우의수이다.
            // 랜덤한 색상 생성 함수
}

class LifeCycleContainer extends Component {

    state = { // 클래스형 컴포넌트에서는 필드값을 그대로 넣는다.
             // 클래스가 갖고있는 값들을 필드라고 한다.

        color : "#000000" // 컴포넌트의 초기 상태를 검정색으로 설정
    }

    
    onClickToChangeColor = () => { // 버튼 클릭 시 랜덤 색상으로 
        this.setState({
            color : getRandomColor()
        })
        console.log("랜덤컬러", this.state.color) // 비동기적으로 업데이트 되므로, 업데이트 전의 값이 나온다.
    }

    render() {
        return (
            <div>
                <LifeCycleComponent color = {this.state.color} /> {/* LifeCycleComponent 렌더링 
                                                                    색상을 props로 전달 */}
                <button onClick={this.onClickToChangeColor}>색상변경</button> {/* 버튼을 클릭하면 색상 변경 함수가 호출 */}
            </div>
        );
    }
}

export default LifeCycleContainer;
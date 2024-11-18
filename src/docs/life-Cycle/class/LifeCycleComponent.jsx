import React, { Component } from 'react';

class LifeCycleComponent extends Component {

    state = { // 숫자와 색상 상태 초기화
        number : 0, // 0으로 초기화되어 숫자 카운트
        color : null // null로 초기화되어 부모로부터 전달된 생상을 받아올 준비
    }

    onClickToIncrease = () => { // 버튼 클리 시 숫자를 1 증가시키는 함수
                                // 버튼의 onClick이벤트에 연결됨
        this.setState({ 
            number : this.state.number + 1
        })
    }

    colorRef = null;

    constructor(props){ // 컴포넌트가 생성될 대 props로그
                        // 생성자에서 부모 클래스인 
                        // Component의 생성자를 호출하여 props 설정
        super(props)
        console.log(props) // 생성시 전달된 props 출력하여 확인
    }

    static getDerivedStateFromProps(nextProps, prevState){ // 부모로부터 전달된 color prop이 변경될 때
        if(nextProps.color !== prevState.color){ // nextProps.color가 이전 상태의 color와 다를 경우,
            return{color : nextProps.color} // 새로운 생상을 상태로 설정한다.
        }
        return null // 그렇지 않으면 null을 반환하여 상태를 변경하지 않는다.
    }

    componentDidMount(){ 
        console.log("랜더링 이후 componentDidMount 실행") // 컴포넌트가 처음 렌더링된 후 한 번만 호출
    }

    shouldComponentUpdate(nextProps, nextState){ // 상태가 업데이트될 때 호출
        console.log("shouldComponentUpdate", nextProps, nextState) 
        return nextState.number % 5 !== 0; // number가 5의 배수가 아닐 경우에만 렌더링
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ // 업데이트가 일어나기 직전에 호출
        console.log("getSnapshotBeforeUpdate", prevProps, prevState)
        if(prevProps.color !== this.props.color){ // 이전 props와 이전 상태를 비교하여
                                                 // 필요한 snapshot 반환
            return this.colorRef.style.backgroundColor; // 색상이 변경된 경우, 이전 배경색을 snapshot으로 반환
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){ // 컴포넌트가 업데이트된 후 호출
        if(prevState){ // 이전상태와 snapshot 확인
            console.log(`업데이트 직전 stste : ${prevState}`)
        }
        if(snapshot){
            console.log(`업데이트 직전 color : ${snapshot}`)
        }
    }

    render() {
        return (
            <div>
                <div
                    ref = {(ref => this.colorRef = ref)} // 현재 색상을 배경색으로 사용
                                                         // colorRef로 이 div의 참조 저장
                    style = {{
                        width : "100px",
                        height : "100px",
                        backgroundColor : this.state.color,
                        display : "flex",
                        alignItems : "center",
                        justifyContent : "center",
                        color : "#ffffff"            
                    }}>

                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.onClickToIncrease}>더하기 버튼</button> {/* 클릭 시 숫자 증가 */}
            </div>
        )
    }
}

export default LifeCycleComponent;
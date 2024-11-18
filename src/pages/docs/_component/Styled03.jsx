import React from 'react';
import S from '../style';
import BasicButton from '../../../components/button/BasicButton';

const Styled03 = () => {

    return (
        <S.Wrap>
            <form action="#">
                <S.Wrap>
                    <span>이메일</span>
                    <input type="text" />
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호</span>
                    <input type="password" />
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호 확인</span>
                    <input type="password" />
                </S.Wrap>
                <BasicButton 
                type="button" 
                variant={"primary"} 
                size={"large"} 
                shape={"small"}
                >로그인</BasicButton>
                {/* BasicButton은 내가 원하는대로 color를 줄 수 있다. 
                    theme에 정의 되어있다. primary로 전달을 했다. 
                    primary값은 BasicButton의 props로 들어온다. 
                    props는 style의 variant로 들어간다.
                    props로 받은 variant가 "primary"이고,
                    primary를 variantCSS에서 대괄호접근법으로 variant를 찾고있으니
                    해당 키값을 찾고있는것이다.
                    해당 키값은 background-color: ${({theme}) => theme.PALLETE.primary["main"]};이다.
                    */}

                {/* 회원가입 버튼을 사용해보기 */}
                <button type='button'>회원가입</button>
            </form>
        </S.Wrap>
    );
};

export default Styled03;
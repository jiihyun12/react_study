import React from 'react';
import { Outlet } from 'react-router-dom';
import S from '../style';

const Layout = () => {
    return (
        <S.LayoutWrapper>
            <S.Header>헤더</S.Header>
            <S.Main><Outlet/></S.Main> {/* layout의 자식 요소를 보여주는 컴포넌트 Outlet */}
            <S.Footer>푸터</S.Footer>
        </S.LayoutWrapper>
    );
};

export default Layout;
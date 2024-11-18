import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div>메인 페이지</div>
            <Link to={"/intro"}>소개 페이지로 이동</Link> { /* Link는 기존 데이터를 그냥 바꿔끼움 */ }
            {/* <a href="/intro">소개페이지로 이동</a> */} {/* a태그는 서버에게 다시 요청한 것 */}
        </>
    );
};

export default Main;
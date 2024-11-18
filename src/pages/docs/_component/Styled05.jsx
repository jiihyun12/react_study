import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPoo} from "@fortawesome/free-solid-svg-icons";
import {faTree} from "@fortawesome/free-solid-svg-icons";


// 폰트어썸 아이콘 사용
// package.json파일에서 @fontawesome/으로 시작하는 친구들이 깔려있는지 확인한다.
// core은 필수이다.
// solid로 되어있으니 갖다 쓰면되고, Regular를 사용하고싶으면 regular로 변경해서 사용한다.
// 라이브러리의 이름이 궁금해서 확인하고싶다면
// npm에 들어가서 다운로드하고싶은 모듈을 검색하여 확인한다. ex) @fontawesome/free-regular-svg-icons검색

// fontawesome 홈페이지에 접속한다.
// 사이트 하단으로 내려가서 사용하고싶은 아이콘 목록을 선택한다.
// 사용하고 싶은 아이콘을 선택하여 filter를 free로 바꿔서 확인한다.
// 아이콘을 선택한 후 React로 선택하고 Individual Import로 복사해서 가져온다.
// react에 붙여넣은 후 상단에서 fontawesome과 아이콘명을 import 해준다.

// 아이콘을 선택하고 좌측 하단의 영상 아이콘을 선택하면
// show animation options가 보여지고 애니메이션을 선택할 수 있다.
// color를 줄 때는 svg나 path에서 주면 된다.
// ex) & path {color : "red"}
const Styled05 = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faPoo} />
            <FontAwesomeIcon icon={faTree} spin /> 
        </div>
    );
};

export default Styled05;
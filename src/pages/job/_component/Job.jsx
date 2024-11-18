import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

// 직업의 기술을 보여주는 페이지
const Job = () => {

// url 파라미터, 쿼리스트링 방법
// const [ searchParams ] = useSearchParams();
// const title = searchParams.get("title");

// 중첩 라우팅 방법
// const {title} = useParams();


const {title} = useParams();

// redux에 있는 값을 가져와서 각각에 요청된 페이지에 맞는 기술들을 화면에 출력
   const jobs = useSelector((state) => state.route.jobs);
   const {name, skills} = jobs[title];

   const skillList = skills.map((skill)=>(
    <>
    <li>{skill}</li>
    </>
   ))

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>기술</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>
            <ul>
                {skillList}
            </ul>
        </div>
    );
};

export default Job;
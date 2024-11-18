import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/users
// 데이터를 가져와서 화면에 user.name을 출력하는 실습

const SideEffectMount = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => { // useEffect훅 사용하여 컴포넌트가 마운트될 때
    const getUsers = async () => { // getUsers라는 비동기 함수 정의
      const response = await fetch("https://jsonplaceholder.typicode.com/users"); // URL에서 사용자 데이터 가져오고 
      const datas = await response.json(); // JSON형식으로 변환
      console.log("리렌더링") // 리렌더링 확인을 위해 메세지 콘솔 출력
      return datas; // 데이터 반환
    }
  //   getUsers().then(setUsers) // 사이드이펙트 발생 코드
  // })

    getUsers().then(setUsers) // getUsers호출되면 비동기적으로 사용자 데이터를 API에서 가져온다.
                              // getUsers가 데이터를 가져오면 그 데이터가 then으로 전달된다.
                              // setUsers를 통해 데이터를 상태로 설정하고
                              // setUsers가 호출되면 users상태가 업데이트되고, 컴포넌트가 리렌더링된다.
  }, []) // useEffect의 두 번째 인자로 빈 배열값을 전달하면
         // 이 useEffect가 컴포넌트가 처음 마운트될 때만 실행되어 fetching이 한 번만 이루어지고
         // 이후에는 상태가 업데이트되더라도 다시 호출되지 않는다.

  return (
    <ul>
      {users.map((user, i) => <li key={i}>{user.name}</li>)}
      {/*  상태에 저장된 사용자 목록을 ul태그 내게 li로 렌더링하여
           각 사용자의 이름을 리스트 항목으로 표시한다.
           key 속성으로 배열의 인덱스를 사용한다. */}
    </ul>
  );
};

export default SideEffectMount;
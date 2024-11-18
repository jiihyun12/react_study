import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostRead = () => {
  const {id} = useParams();
  console.log(id)

  const [post, setPost] = useState({});

  useEffect(() => {

    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const datas = await response.json()
      return datas;
    }

    getPosts()
      .then(setPost)
      .catch(console.error)
      
  }, [])

  console.log(post)

  return ( 
    <div>
     상세정보 페이지!
    </div>
  );
};

export default PostRead;
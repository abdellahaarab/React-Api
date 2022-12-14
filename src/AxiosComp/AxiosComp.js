import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import DeletePost from './DeletePost'
import UpdatePost from './UpdatePost'



function AxiosComp() {  
  const [Posts,setPosts] = useState(null)


  useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setPosts(res.data))
    },[])

   return (
    <div>
        
        <CreatePost/>
        <UpdatePost/>
        <DeletePost/>
        <h1>All Posts</h1>
        <ul>
            {
                Posts?Posts.map((elm,i)=><li key={i}>{elm.title}</li>):"undefind"
            }
        </ul>
    </div>
  )
}

export default AxiosComp
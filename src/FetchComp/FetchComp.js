import React, { useEffect, useState } from 'react'
import './FetchComp.css'


function FetchComp() {
  const [posts,setPosts] = useState([])
  async function data(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    setPosts(data)
    }
  useEffect(()=>{data()},[])
  return (
    <div>
        <h1>All Posts</h1>
        <div>
            {
                posts?posts.map((elm,i)=><p key={i}>{elm.title}</p>):"undefind"
            }
        </div>
    </div>
  )
}

export default FetchComp
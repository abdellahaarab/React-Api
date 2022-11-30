import React from 'react'
import usePostsApi from './usePostsApi'




function Index() {
    var posts = usePostsApi()
  return (
    <div>
        <h2>{posts.length}</h2>
        <ul>
            {posts.map((e,i)=><li key={i}>{e.title}</li>)}
        </ul>
    </div>
  )
}

export default Index
import { useEffect, useState } from 'react'

function usePostsApi() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return posts
}

export default usePostsApi
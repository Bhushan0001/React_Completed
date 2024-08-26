import React, { useState, useContext, useEffect } from 'react'
import {PostListData} from '../store/post-list-store'
import Post from './Post'
import EmptyPost from './EmptyPost'
import LoadinSpinner from './LoadinSpinner'
function PostList() {
  const {postList,add_Initial_Post} = useContext(PostListData)
  const [fetchingData, setFetchingData] = useState(false)
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
  let fetchData = async()=>{
    try {
      setFetchingData(true)
      const response = await fetch('https://dummyjson.com/posts',{signal});
      const data = await response.json();
      add_Initial_Post(data.posts);
      setFetchingData(false)
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
  return ()=>{
    console.log("Cleaning up UseEffect.");
    controller.abort();
  };
  }
  fetchData();
   },[])
  return (
    <>
   {fetchingData===true ? <LoadinSpinner></LoadinSpinner>: postList.length===0 ? <EmptyPost/> : postList.map((post)=>{return <Post key={post.id} id={post.id} title={post.title} body={post.body} tags={post.tags} reactions={post.reactions} views={post.views} userId={post.userId} />})}
  

    </>
  )
}

export default PostList
import React, { useContext } from 'react'
import { RiChatDeleteFill } from "react-icons/ri";
import { PostListData } from '../store/post-list-store';

function Post({id,title, body,tags, reactions, views, userId}) {
  const {deletePost} = useContext(PostListData)
  return (
    <div className="card post" style={{width: "25rem"}}>
      <span role="button" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" onClick={()=>deletePost(id)}> <RiChatDeleteFill /> </span>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{body}</p>
   {tags.map((tag)=>{return <span key={tag} className="badge rounded-pill text-bg-info mx-2">{tags}</span>})}
  </div>
    <div> <div className="badge text-bg-primary text-wrap m-2" style={{width: "6rem"}}>
  {`Post Likes are : ${reactions.likes}`}
</div>
<div className="badge text-bg-primary text-wrap m-2" style={{width: "6rem"}}>
  {`Post Likes are : ${reactions.dislikes}`}
</div>
<div className="badge text-bg-primary text-wrap m-2" style={{width: "6rem"}}>
  {`Post views are : ${views}`}
</div>
</div>
<div></div>
</div>
  )
}

export default Post
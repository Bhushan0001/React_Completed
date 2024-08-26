import React, { useContext, useRef } from 'react'
import { PostListData } from '../store/post-list-store';
function CreatPost() {
  const { addPost } = useContext(PostListData)
  let userId = useRef();
  let title = useRef();
  let content = useRef();
  let reaction = useRef();
  let tags = useRef();
  const submitPost = (event) => {
    event.preventDefault()
    const userIdElement = userId.current.value
    const titleElement = title.current.value
    const contentElement = content.current.value
    const reactionElement = reaction.current.value
    const tagsElement = tags.current.value.split(' ')
    userId.current.value = ""
    title.current.value = ""
    content.current.value = ""
    reaction.current.value = ""
    tags.current.value = ""
    addPost(userIdElement, titleElement, contentElement, reactionElement, tagsElement )
  }
  return (
    <>
      <form className='create-post col-lg-6 offset-lg-3' onSubmit={submitPost}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label ">UserId</label>
          <input type="text" ref={userId} className="form-control border-dark" id="userId" placeholder='Enter Your userId' />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={title} className="form-control border-dark" id="title" placeholder='How are you feeling today' />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type="text" ref={content} rows='4' className="form-control border-dark" id="title" placeholder='Tell us more about it' />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="text" ref={reaction} className="form-control border-dark" id="title" placeholder='How many people reacted to this post' />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your Hashtags here</label>
          <input type="text" ref={tags} className="form-control border-dark" id="title" placeholder='How are you feeling today' />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </>
  )
}

export default CreatPost
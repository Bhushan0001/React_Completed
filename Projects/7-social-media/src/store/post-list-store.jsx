
import { createContext, useReducer } from 'react'
const DEFAULT_VALUE = {
  postList: [],
  addPost: () => { },
  add_Initial_Post: ()=> {},
  deletePost: () => { }
}
export const PostListData = createContext(DEFAULT_VALUE);

const postListReducer = (currpostList, action) => {
  let newPost = currpostList
  if (action.type === "DELET_POST") {
    newPost = currpostList.filter((item) => item.id !== action.payload.postId)
  }
  else if(action.type==="ADD_POST"){
      newPost = [action.payload,...currpostList]
  }
  else if(action.type === "ADD_In_POST"){
    newPost = action.payload.posts
  }
  return newPost;
}
const PostListProvider = ({ children }) => {

  const postListData = [{
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: [
      "history",
      "american",
      "crime"
    ],
    reactions: {
      "likes": 192,
      "dislikes": 25
    },
    views: 305,
    userId: 121
  }]

  const add_Initial_Post = (posts) => {
    dispatchPostList({
      type: "ADD_In_POST",
      payload: {
          posts
      }})
  }

  const [postList, dispatchPostList] = useReducer(postListReducer, [])

  const addPost = (title, body, tags, reactions, views, userId) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
          id: Date.now(),
          title,
          body,
          tags,
          reactions,
          views,
          userId
      }})
  }

  const deletePost = (id) => {
    const newPostPaas = { type: "DELET_POST", payload: { postId: id } }
    dispatchPostList(newPostPaas)
  }
  return <PostListData.Provider value={{ postList, addPost, add_Initial_Post, deletePost }}>{children}</PostListData.Provider>
}
export default PostListProvider




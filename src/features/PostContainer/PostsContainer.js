import React from "react";
import { useSelector } from "react-redux";
import { selectPostsContainer } from "./PostsContainerSlice";
import Post from "../Post/Post";
import PostClone from "../Post/PostClone";
import Filter from "../Filter/Filter";
import ChangePage from "../ChangePage/ChangePage";
import { selectPath } from "../../app/utilitySlice";

const PostsContainer = ({ subreddit }) => {
  //state
  const postContainer = useSelector(selectPostsContainer);
  const path = useSelector(selectPath);
  const posts = postContainer.posts;

  return (
    <section id="postContainer">
      {path === "/search" 
        ? null 
        : <Filter subreddit={subreddit} />}
      {postContainer.isLoading ? <PostClone/>: posts.map((post, index) => <Post dataPost={post} key={index}/>)}
      <ChangePage subreddit={subreddit}/>
    </section>
  )
}

export default PostsContainer;

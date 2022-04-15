import React, { useEffect } from "react";
import PostContainer from "../../features/PostContainer/PostsContainer";

import Authentication from "../../features/Authentication/Authentication";
import { useDispatch } from "react-redux";
import { postsFetch } from "../../features/PostContainer/PostsContainerSlice";
import { identityFetch } from "../../features/Navbar/NavbarSlice"
import { Reddit } from "../../utility/reddit";

const AppIndex = () => {
  //action 
  const action = useDispatch();

  //state

  useEffect(() => {
    Reddit.getRefreshToken(
    ).then(() => {
      action(identityFetch());
    }).then(() => {
      action(postsFetch({path: 'best', lastElement: null, firstElement: null, subreddit: null}));
    });
  })

  return (
    <main id="app-index">
      <Authentication />
      <PostContainer subreddit={null}/>
    </main>
  )
}

export default AppIndex;

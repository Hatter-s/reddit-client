import React, { useEffect } from "react";
import PostContainer from "../../features/PostContainer/PostsContainer";

import Authentication from "../../features/Authentication/Authentication";
import { useDispatch } from "react-redux";
import { postsFetch } from "../../features/PostContainer/PostsContainerSlice";
import { identityFetch } from "../../features/Navbar/NavbarSlice"
import { Reddit } from "../../utility/reddit";
import { changePath } from "../../app/utilitySlice";
import { changeSubreddit } from "../FullPage/SearchPage/SearchPageSlice";

const AppIndex = () => {
  //action 
  const action = useDispatch();

  //state

  useEffect(() => {
    if(!localStorage.getItem("accessToken")){
      Reddit.getAccessToken().then(() => {
        action(identityFetch());
      }).then(() => {
        action(postsFetch({path: 'best', lastElement: null, firstElement: null, subreddit: null}));
      }).then(() => {
        action(changeSubreddit(null));
      });
    }
    else {
      Reddit.getRefreshToken(
      ).then(() => {
        action(identityFetch());
      }).then(() => {
        action(postsFetch({path: 'best', lastElement: null, firstElement: null, subreddit: null}));
      }).then(() => {
        action(changeSubreddit(null));
      });
    }
    
    action(changePath(window.location.pathname));
  })

  return (
    <main id="app-index">
      <Authentication />
      <PostContainer subreddit={null}/>
    </main>
  )
}

export default AppIndex;

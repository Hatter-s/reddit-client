import React from "react";
import Filter from "../../features/Filter/Filter";
import Search from "../../features/Search/Search";
import Post from "../../features/Post/Post";

import Authentication, { CountExpire } from "../../features/Authentication/Authentication";

const AppIndex = () => {
  //state

  return (
    <main id="app-index">
      <CountExpire />
      <Filter/>
      <Search/>
      <Authentication />
      <Post />
    </main>
  )
}

export default AppIndex;

//handle the expire
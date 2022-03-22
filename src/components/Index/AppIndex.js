import React from "react";
import Filter from "../../features/Filter/Filter";
import Search from "../../features/Search/Search";

import Authentication, { CountExpire } from "../../features/Authentication/Authentication";

const AppIndex = () => {
  //state

  return (
    <main id="app-index">
      <CountExpire />
      <Filter/>
      <Search/>
      <Authentication />
    </main>
  )
}

export default AppIndex;

//handle the expire
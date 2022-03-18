import React from "react";
import { Reddit } from "../../utility/reddit";
import Filter from "../../features/Filter/Filter";
import Search from "../../features/Search/Search";

const AppIndex = () => {

  return (
    <main id="app-index">
      <Filter/>
      <Search/>
      <button className="btn btn-outline-info" onClick={Reddit.authorization}>
        Click here
      </button>
      <button className="btn btn-outline-info" onClick={Reddit.getAccessToken}>
        Get Access Token
      </button>
      <button className="btn btn-outline-info" onClick={Reddit.refreshToken}>
        Get Refresh Token
      </button>
    </main>
  )
}

export default AppIndex;
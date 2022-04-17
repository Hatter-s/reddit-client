import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reddit } from "../../../utility/reddit";
import { changePath } from "../../../app/utilitySlice";
import { changeSort, changeLimit, changeSubreddit, selectSearchData } from "./SearchPageSlice";
import PostsContainer from "../../../features/PostContainer/PostsContainer";
import { searchFetch } from "../../../features/PostContainer/PostsContainerSlice";
import { identityFetch } from "../../../features/Navbar/NavbarSlice";

const SearchPage = () => {
  //state
  const searchData = useSelector(selectSearchData);

  //action
  const action = useDispatch();
  // console.log(window.location.search.match(/(?<=\?term=).*/)[0])

  //utility var
  const term = window.location.search.match(/(?<=\?term=).*/)[0];

  //effect
  useEffect(() => {
    action(changePath(window.location.pathname));
    Reddit.getRefreshToken(       
    ).then(() => {
      action(identityFetch());
    })
    .then(() => {
      action(searchFetch({term, limit: searchData.limit, sort: searchData.sort}))
    })
  })

  //handle limit
  const handleLimit = ({ target }) => {
    action(changeLimit(target.value));
    action(searchFetch({term, limit: target.value, sort: searchData.sort}));
  }

  const handleSort = ({ target }) => {
    action(changeSort(target.value));
    action(searchFetch({term, limit: searchData.limit, sort: target.value}))
  }

  return (
    <main id="search-page">
      <h1>This is search page</h1>
      <div id="select-container">
        <label>
          Limit
          <select 
            className="limit" 
            onChange={handleLimit}
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select> 
        </label>
        <label>
          Sort
          <select 
            className="sort"
            onChange={handleSort}
          >
            <option value="relevance">Relevance</option>
            <option value="hot">Hot</option>
            <option value="top">Top</option>
            <option value="new">New</option>
            <option value="comments">Comments</option>
          </select> 
        </label>
      </div>
      <PostsContainer/>
    </main>
  )
}

export default SearchPage;
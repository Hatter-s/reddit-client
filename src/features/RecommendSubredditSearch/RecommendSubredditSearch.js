import React from "react";
import { useDispatch } from "react-redux";
import { changeSubreddit} from "../../components/FullPage/SearchPage/SearchPageSlice";
import "./RecommendSubredditSearch.css";

const RecommendSubredditSearch = () => {
  //action
  const action = useDispatch();
  
  //state
  const subredditName = window.localStorage.getItem("subredditName");

  //handle event
  const handleDelete = () => {
    action(changeSubreddit(null));
  }

  return ( 
    <section className="recommend-subreddit-search">    
      { subredditName 
      ? <div className="container">
          <p>{subredditName}</p>
          <button className="delete-button" onClick={handleDelete}>
            <i className="bi bi-x"></i>
          </button>
        </div> 
      : null}
    </section>
  )
}

export default RecommendSubredditSearch;
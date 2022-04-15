import React from "react";
import { useSelector } from "react-redux";
import { selectSubredditPage } from "../../components/FullPage/SubredditPage/SubredditPageSlice";

const RulesSubreddit = () => {
  const subredditPage = useSelector(selectSubredditPage);

  return (
    <section id="rules-subreddit">
      {subredditPage.isLoading 
        ? (
          <div className="loading">
            <i className="bi bi-arrow-clockwise"></i>
          </div>
          )
        : (
          <div className="container">
            <ul className="list-rules">
              
            </ul>
          </div>
          )
      }
    </section>
  )
}

export default RulesSubreddit;
import React from "react";
import { useSelector } from "react-redux";
import { selectSubredditPage } from "../../components/FullPage/SubredditPage/SubredditPageSlice";
import { textToHtml } from "../../utility/textToHtml";

const AboutSubreddit = () => {
  //state
  const subredditPage = useSelector(selectSubredditPage);
  const subredditData = subredditPage.subreddit;

  const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const timeCreate = new Date(subredditData.timeCreate * 1000); // count by milliseconds
  return (
    <section id="about-subreddit">
      {!subredditPage.isLoading
        ? (<div className="container">
            <h2>About Community</h2>
            <div className="description" dangerouslySetInnerHTML={textToHtml(subredditData.description)}>
            </div>
            <hr/>
            <p className="timeCreate">
              Created {MONTH[timeCreate.getMonth()]} {timeCreate.getDay()} {timeCreate.getFullYear()}
            </p>
          </div>)
        : <div className="loading">
            <i className="bi bi-arrow-clockwise"></i>
          </div>
      }
    </section>
  )
}

export default AboutSubreddit;

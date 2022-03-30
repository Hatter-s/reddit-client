import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  //state
  const [ voteUp, setVoteUp ] = useState(false);
  const [ voteDown, setVoteDown ] = useState(false);
  const [ save, setSave ] = useState(false);

  //event
  const handleVoteUp = () => {
    setVoteUp(!voteUp);
    setVoteDown(false);
  }

  const handleVoteDown = () => {
    setVoteDown(!voteDown);
    setVoteUp(false);
  }

  const handleSave = () => {
    setSave(!save);
  }
  
  //style


  return (
    <section id="post">
      <div className="vote">
        <i 
          className="bi bi-caret-up-fill" 
          style={voteUp ? { color: '#DD4A48' } : { color: '#000' }}
          onClick={handleVoteUp}
        ></i>
        <p className="votes-number">1111</p>
        <i 
          className="bi bi-caret-down-fill" 
          style={voteDown ? { color: '#1572A1' } : { color: '#000' }}
          onClick={handleVoteDown}
        ></i>
      </div>
      <div className="top-bar">
        <p className="subreddit-name">subreddit-name</p>
        <p className="poster-name">poster-name</p>
        <ul className="all-awardings">
          <li className="award" key="0">
            <img src="https://www.redditstatic.com/gold/awards/icon/silver_16.png" alt=""/>
            <p className="count">1</p>
            <div className="award-hover">
              <img src="https://www.redditstatic.com/gold/awards/icon/silver_64.png" alt=""/>
              <h2>Name</h2>
              <p className="price">Price: 100</p>
              <p className="reward">Reward: 0</p>
              <p className="description">Shows the Silver Award... and that's it.</p>
            </div>
          </li>
          <li className="award" key="1">
            <img src="https://www.redditstatic.com/gold/awards/icon/silver_16.png" alt=""/>
            <p className="count">1</p>
            <div className="award-hover">
              <img src="https://www.redditstatic.com/gold/awards/icon/silver_64.png" alt=""/>
              <h2>Name</h2>
              <p className="price">Price: 100</p>
              <p className="reward">Reward: 0</p>
              <p className="description">Shows the Silver Award... and that's it.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="main">
        <p className="title">Irure veniam nulla veniam consectetur mollit aliqua exercitation do in quis qui officia.</p>
        <img className="media" alt="" src=""/>
        <div className="action-bar">
          <Link to="" className="comment">
            <i className="bi bi-chat-left"></i> 11 Comment
          </Link>
          <p><i className="bi bi-share"></i> Share</p>
          <p onClick={handleSave}>{save ? <i className="bi bi-bookmark-fill"></i> : <i className="bi bi-bookmark"></i>} {save ? "Unsave" : "Save"}</p>
        </div>
      </div>
    </section>
  )
}

export default Post;

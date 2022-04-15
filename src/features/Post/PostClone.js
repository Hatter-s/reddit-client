import React from "react";

const PostClone = () => {
  return (
    <section id="post-clone">
      <div className="vote">
        <i 
          className="bi bi-caret-up-fill" 
          style={{ color: '#000' }}
        ></i>
        <p className="votes-number">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
        <i 
          className="bi bi-caret-down-fill" 
          style={{ color: '#000' }}
        ></i>
      </div>
      <div className="top-bar">
        <p className="subreddit-name">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
        <p className="author-name">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
        <p className="time">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
        <p className="all-awardings">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
      </div>
      <div className="main">
        <p className="title">
          <i className="bi bi-arrow-clockwise"></i>
        </p>
        <div className="content">
          <i className="bi bi-arrow-clockwise"></i>
        </div> 
        <div className="action-bar">
          <button className="btn btn-outline-warning">
            <i className="bi bi-chat-left"></i> Comment
          </button>
          <p><i className="bi bi-share"></i> Share</p>
          <p>
            <i className="bi bi-bookmark"></i>
            Save
          </p>
        </div>
      </div>
    </section>
  )
}

export default PostClone;
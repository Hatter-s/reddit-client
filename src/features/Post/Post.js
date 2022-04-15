import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Reddit } from "../../utility/reddit";
import { textToHtml } from "../../utility/textToHtml";
import "./Post.css";

const Post = ( props ) => {
  //props
  const dataPost = props.dataPost;

  //state
  const [ vote, setVote ] = useState(dataPost.vote);
  const [ voteUp, setVoteUp ] = useState(dataPost.likes === true ? true : false);
  const [ voteDown, setVoteDown ] = useState(dataPost.likes === false ? true : false);
  const [ save, setSave ] = useState(dataPost.saved? true : false);
  const [ commentField, setCommentField] = useState(false);
  const [ commentValue, setCommentValue] = useState('');

  //event
  const handleVoteUp = () => {
    voteUp ? Reddit.vote(dataPost.name, 0) : Reddit.vote(dataPost.name, 1);
    setVoteUp(!voteUp);
    setVoteDown(false);
    voteUp ? setVote(vote - 1) : setVote(vote + 1);
  }

  const handleVoteDown = () => {
    voteDown ? Reddit.vote(dataPost.name, 0) : Reddit.vote(dataPost.name, -1);
    setVoteDown(!voteDown);
    setVoteUp(false);
    setVote(vote - 1);
    voteDown ? setVote(vote + 1) : setVote(vote - 1);
  }

  const handleSave = () => {
    const saveNow = !save;
    setSave(!save);
    Reddit.save(saveNow, dataPost.name);
  }
  
  const triggerComment = () => {
    // now when you click on the comment button it will trigger a input comment field
    setCommentField(!commentField);
  }

  const calTime = () => {
    // this function use to calculate time diff time when it was created and now
    const now = Date.now() / 1000;
    const timeCreate = dataPost.timeCreate;
    // change unit to second
    const timeDiff = (now -timeCreate);
    if(timeDiff <= 60) {
      return `${Math.floor(timeDiff)} seconds ago`;
    } else if(timeDiff  <= 3600) {
      return `${Math.floor(timeDiff / 60)} minutes ago`;
    } else if(timeDiff <= 86400) {
      return `${Math.floor(timeDiff / 3600)} hours ago`;
    } else if(timeDiff <= 2592000) {
      return `${Math.floor(timeDiff / 86400)} days ago`;
    } else if(timeDiff <= 31536000) {
      return `${Math.floor(timeDiff / 2592000)} months ago`;
    } else {
      return `${Math.floor(timeDiff / 31536000)} years ago`;
    }
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
  }
  
  const handleOnChangeComment = (e) => {
    setCommentValue(e.target.value);
    Reddit.comment(dataPost.name, commentValue);
  }

  const handleInfo = () => {
    Reddit.info(dataPost.subredditId);
  }

  const handleChangePage = () => {
    localStorage.setItem("subredditFullName", dataPost.subredditId);
    console.log(localStorage.getItem("subredditFullName"));
  }

  return (
    <section id="post">
      <div className="vote">
        <i 
          className="bi bi-caret-up-fill" 
          style={voteUp ? { color: '#DD4A48' } : { color: '#000' }}
          onClick={handleVoteUp}
        ></i>
        <p className="votes-number">{vote}</p>
        <i 
          className="bi bi-caret-down-fill" 
          style={voteDown ? { color: '#1572A1' } : { color: '#000' }}
          onClick={handleVoteDown}
        ></i>
      </div>
      <div className="top-bar">
        <p className="subreddit-name" onClick={handleInfo}>{dataPost.subredditName}</p>
      <Link to={`/${dataPost.subredditName}`} onClick={handleChangePage}>{dataPost.subredditName}</Link>
        <p className="author-name">{dataPost.authorName}
        </p>
        <p className="time">
          {calTime()}
        </p>
        <ul className="all-awardings">
          {dataPost.awardings
            ? dataPost.awardings.map((award, index) => (
              <li className="award" key={index}>
                <img src={award.img} alt=""/>
                {award.count === 1 ? null : <p className="count">{award.count}</p>}
                <div className="award-hover">
                  <img src={award.hover.img} alt=""/>
                  <h2>{award.hover.name}</h2>
                  <p className="price">Price: {award.hover.coinPrice}</p>
                  <p className="reward">Reward: {award.hover.coinReward}</p>
                  <p className="description">{award.hover.description}</p>
                </div>
              </li>)) 
            : null}
        </ul>
      </div>
      <div className="main">
        <p className="title">{dataPost.title}</p>
        <div className="content">
          {dataPost.isVideo 
          ? <video width={dataPost.media.width} height={dataPost.media.height} controls>
            <source src={dataPost.media["fallback_url"]} />
          </video>
          : dataPost.isRedditMediaDomain ? <img src={dataPost.img} alt="" />
          : /www.reddit.com/.test(dataPost.url) ? <div dangerouslySetInnerHTML={textToHtml(dataPost['selfTextHtml'])}></div>
          : <div className="link">
              <a href={dataPost.url}>{dataPost.url}</a>
              <a href={dataPost.url} target="_blank" rel="noreferrer">
                <img src={dataPost.thumbnail.url} alt="" height={dataPost.thumbnail.height} width={dataPost.thumbnail.width}/>
              </a>
              
            </div> 
          
          }
        </div> 
        <div className="action-bar">
          <button to="" className="btn btn-outline-warning" onClick={triggerComment}>
            <i className="bi bi-chat-left"></i> Comment
          </button>
          <form 
            onSubmit= {handleSubmitComment}
            className= {commentField ? "display-comment" : "hidden-comment"}
          >
            <label htmlFor="comment">
              <input 
                name="comment" 
                value={commentValue}
                onChange={handleOnChangeComment}
              />
              <input 
                type="submit" 
                value="Comment"
                className="btn btn-outline-info"
              />
            </label>
            
          </form>
          <p><i className="bi bi-share"></i> Share</p>
          <p onClick={handleSave}>
            {save 
              ? <i className="bi bi-bookmark-fill"></i> 
              : <i className="bi bi-bookmark"></i>} 
            {save 
              ? "Unsave" 
              : "Save"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Post;

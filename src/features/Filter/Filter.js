import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { selectKind, updateKind } from "./FilterSlice";
import { resetElement, postsFetch } from "../PostContainer/PostsContainerSlice";

const Filter = ({ subreddit }) => {
  //action
  const action = useDispatch();
  //state
  //filter slice
  const kind = useSelector(selectKind);
  //postsContainer slice
  //handle event
  const handleKind = (e) => {
    let kind = e.target.title;
    action(updateKind(kind));
    action(resetElement());
    action(postsFetch({path: kind, lastElement: null, firstElement: null}));
  }

  return (
    <section 
      className="container-fuild" 
      id="filter"
    >
      {subreddit 
      ? (
        <div id="subreddit-filter">
          <button
            id="hot" 
            className={`select${kind === "hot" || kind === "best" ? " selected" : ""}`}
            onClick={handleKind}
            title="hot"
          >
            <img src="../../../image/filter/fire.png" alt="hot icon" className="icon" title="hot"/>
            Hot
          </button>
          <button
            id="new" 
            className={`select${kind === "new" ? " selected" : ""}`}
            onClick={handleKind}
            title="new"
          >
            <img src="../../../image/filter/new.png" alt="new icon" className="icon" title="new"/>
            New
          </button>
          <button
            id="top" 
            className={`select${kind === "top" ? " selected" : ""}`}
            onClick={handleKind}
            title="top"
          >
            <img src="../../../image/filter/top-three.png" alt="top icon" className="icon" title="top"/>
            Top
          </button>
        </div>
      )
      : (
        <div id="app-filter">
          <button 
            id="best"
            className={`select${kind === "best" ? " selected" : ""}`}
            onClick={handleKind}
            title="best"
          >
            <img src="../../../image/filter/rocket.png" alt="best icon" className="icon" title="best"/>
            Best
          </button>
          <button
            id="hot" 
            className={`select${kind === "hot" ? " selected" : ""}`}
            onClick={handleKind}
            title="hot"
          >
            <img src="../../../image/filter/fire.png" alt="hot icon" className="icon" title="hot"/>
            Hot
          </button>
          <button
            id="new" 
            className={`select${kind === "new" ? " selected" : ""}`}
            onClick={handleKind}
            title="new"
          >
            <img src="../../../image/filter/new.png" alt="new icon" className="icon" title="new"/>
            New
          </button>
          <button
            id="top" 
            className={`select${kind === "top" ? " selected" : ""}`}
            onClick={handleKind}
            title="top"
          >
            <img src="../../../image/filter/top-three.png" alt="top icon" className="icon" title="top"/>
            Top
          </button>
        </div>
      )
      }
      
    </section>
  )
}

export default Filter;
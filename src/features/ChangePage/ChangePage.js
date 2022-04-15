import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKind } from "../Filter/FilterSlice";
import { selectFirstElement, selectLastElement, postsFetch } from "../PostContainer/PostsContainerSlice";


const ChangePage = ({ subreddit }) => {
  //action 
  const action = useDispatch();
  //state
  const kind = useSelector(selectKind);
  const firstElement = useSelector(selectFirstElement);
  const lastElement = useSelector(selectLastElement);


  //event
  const handleBack = () => {
    action(postsFetch({kind, lastElement: null, firstElement, subreddit}));
  }

  const handleNext = () => {
    action(postsFetch({kind, lastElement, firstElement: null, subreddit}));
  }

  return (
    <section className="change-page">
      <button 
        className="btn btn-outline-dark" onClick={handleBack}
      >
        Back
      </button>
      <button 
        className="btn btn-outline-dark"
        onClick={handleNext}
      >
        Next
      </button>
    </section>
  )
}

export default ChangePage;
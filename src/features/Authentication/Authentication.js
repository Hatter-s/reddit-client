// display an authentication when don't have authentication

import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {  getAccessToken, getRefreshToken } from "./authenticationSlice";
import { updateAppAuth, updateRedditApiAuth } from "./authenticationSlice";
import { selectAuthentication } from "./authenticationSlice";
import { Reddit } from "../../utility/reddit";


const ProvideAppAuth = () => {
  //action
  const action = useDispatch();

  //handle event
  const handleProvideAppAuth = () => {
    Reddit.authorization();
  }

  const handleDontProvideAppAuth = () => {
    action(updateAppAuth(false));
  }

  return (
    <section id="provideAppAuth">
      <div className="container">
        <h1>
          You need provide permission for web applization to continue action, when you agree you will be redirect to login and provide permission of reddit
        </h1>
        <img src="../../../image/caution_sign.svg.png" alt="caution sign"/>
        <button className="btn btn-outline-info" onClick={handleProvideAppAuth}>Provider</button>
        <button className="btn btn-outline-secondary" onClick={handleDontProvideAppAuth}>Cancel</button>
      </div>
    </section>
  )
}

const DontProvideAppAuth = () => {
  //handle event
  const handleProvideAppAuth = () => {
    Reddit.authorization();
  }

  return (
    <section id="dontProvideAppAuth">
      <div>
        <h1>Look like you don't provide permission for app, if you want access we website please provide permission</h1>
        <button className="btn btn-outline-info" onClick={handleProvideAppAuth}>Provider</button>
      </div>
    </section>
  )
}

const DontProvideRedditApiAuth = () => {
  //handle event
  const handleProvideRedditApiAuth = () => {
    Reddit.authorization();
  }

  return (
    <section id="dontProvideAppAuth">
      <div>
        <h1>Look like you don't provide permission for reddit api authentization, if you want access we website please provide permission</h1>
        <button className="btn btn-outline-info" onClick={handleProvideRedditApiAuth}>Provider</button>   
      </div>
    </section>
  )
}

const Authentication = () => {
  // action
  const action = useDispatch();
  //call state
  const auth = useSelector(selectAuthentication);
  const search = window.location.search;

  const handleOnload = () => {
    // Check local storage and check is this first load
    if(!/error/.test(search) && localStorage.getItem('accessToken') === 'undefined') {
      action(updateAppAuth(true));
      action(updateRedditApiAuth(true));
      action(getAccessToken());
      return;
    }
    if(localStorage.getItem('accessToken')) {
      action(updateAppAuth(true));
      action(updateRedditApiAuth(true));
      return;
    }
    if(search === '') {
      return;
    }
    if(/error/.test(search)) {
      action(updateAppAuth(true));
      action(updateRedditApiAuth(false));
      return;
    } else if(!/error/.test(search)) {
      action(updateAppAuth(true));
      action(updateRedditApiAuth(true));
      action(getAccessToken());
    }
  }

  return (
    <section id="auth" onLoad={handleOnload}>
    {auth['appAuth'] === null
      ? <ProvideAppAuth />
      : auth.appAuth === false ? <DontProvideAppAuth />
      : auth.redditApiAuth === false ? <DontProvideRedditApiAuth /> 
      : null
    }
    </section>
  )
}

const CountExpire = () => {
  //action 
  const action = useDispatch();
  //state
  const [expiresTime, setExpiresTime] = useState(Number(localStorage.getItem('expiresIn')));
  useEffect(() => {
    setTimeout(() => {
      if (Number(localStorage.getItem('expiresIn')) === 3600) {
        setExpiresTime(3599);
        localStorage.setItem('expiresIn', expiresTime);
      }else if(expiresTime !== 3600) {
        setExpiresTime(expiresTime - 2);
        localStorage.setItem('expiresIn', expiresTime);
      }

      if(expiresTime === 0) {
        action(getRefreshToken());
      }
    }, 2000);
  }, [expiresTime, action])
  //render nothing
  return null
}

export default Authentication;
export { CountExpire }

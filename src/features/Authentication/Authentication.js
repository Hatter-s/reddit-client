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
  const [ term, setTerm ] = useState(''); 
  const [ limit, setLimit ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ emojis, setEmojis ] = useState([]);
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
    <div id='button contain'>
      <button className="btn btn-outline-warning" onClick={() => {
        Reddit.getIdentity();
      }}>get Indentify</button>
      <button className="btn btn-outline-info" onClick={() => {
        Reddit.getRefreshToken();
        console.log(localStorage);
      }}>
        get refresh token
      </button>
      <button className="btn btn-danger" onClick={() => {
        Reddit.example();
      }}>
        example
      </button>
      <button className="btn btn-dark" onClick={()=> {
        Reddit.getAccessToken();
      }}>
        get accessToken
      </button>
      <form onSubmit={(e) => {
        e.preventDefault();
        Reddit.search(term, limit, sort)
      }}>
        <label>Term: </label>
        <input type='text' id='term' onChange={(e) => {
          setTerm(e.target.value);
        }} value={term} />
        <br/>
        <label>Limit: </label>
        <input type='number' id='limit' onChange={(e) => {
          setLimit(e.target.value);
        }} value={limit} min='0' max='100' />
        <br/>
        <label>
          Sort: 
        </label>
        <select onChange={(e) => {
          setSort(e.target.value);
        }} id="sort">
          <option value='relevance'>relevance</option>
          <option value='hot'>hot</option>
          <option value='top'>top</option>
          <option value='new'>new</option>
          <option value='comments'>comments</option>
        </select>
        <input type='submit' />
      </form>
      <button 
        className="btn btn-outline-success"
        onClick={() => {
          Reddit.emojis().then(result => {
            let emojisPromise = result.map(emoji => {
              let result = Object.entries(emoji);
              return (
              <figure key={result[0][0]}>
                <img src={result[0][1]} alt=""/>
                <figcaption>
                  {result[0][0]}
                </figcaption>
              </figure>)
            });
            setEmojis(emojisPromise);
          }).catch(err => console.log(err));
          
        }} 
      >
        emojis
      </button>
      <div className="emojis-contain d-flex flex-wrap">
        {emojis}
      </div>
      <button className="btn btn-outline-info" onClick={() => {
        Reddit.historyUpvoted();
      }}>
        history
      </button>
      <button className="btn btn-outline-danger" onClick={() => {
        Reddit.best();
      }}>
        best
      </button>
    </div>
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

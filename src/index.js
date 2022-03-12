import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Error404 from './components/Error/404';
import AppIndex from './components/Index/AppIndex';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
            <Route path='/' element={<App/>}>
              <Route index element={<AppIndex/>} />
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>        
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

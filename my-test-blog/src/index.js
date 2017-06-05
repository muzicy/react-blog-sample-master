import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import { IndexRoute} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/home/home'
import Nav from './components/navigator'
import ArticlePage from './components/articles/pages.js'
import {loadAllArticles} from './actions/articles'
 
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const loggerMiddleware = createLogger()

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
//store.dispatch(loadAllArticles());

ReactDOM.render(
    <Provider store={store}>
         <Router>
         <div>
              <Route exact path='/' component={Home} />           
               
              
              <Route path='/detail/:id' component={ArticlePage} />
          </div>
         </Router>
    </Provider>
	, document.getElementById('root'));
registerServiceWorker();



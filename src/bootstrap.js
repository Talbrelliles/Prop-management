import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import requireAuth from './components/requireAuth';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

//import 'bootstrap/dist/css/bootstrap.css';
import NewsletterDetail from './components/newsletter/newsletterDetail';
import './style/main.scss';
import Layout from './components/layout';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import history from './history';
import Dashboard from './components/dashboard.js';
import NewNewsletter from './components/newsletter/newsletterNew';
import EditNewsletter from './components/newsletter/newsletterEdit';
import NewRequest from './components/requests/requestsNew'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin'  component={Signin}/>
             <Route path='/signup' component={Signup}/>
             <Route path='/newsletter/new' component={requireAuth(NewNewsletter)}/>
              <Route path='/newsletter/edit/:id' component={requireAuth(EditNewsletter)}/>
             <Route path='/newsletter/detail/:id' component={requireAuth(NewsletterDetail)}/>
           
             <Route path='/dashboard' component={requireAuth(Dashboard)}/>
            <Route path='/request/new' component={requireAuth(NewRequest)}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>, document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

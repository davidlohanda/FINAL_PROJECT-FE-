import React, { Component } from 'react';
import './App.css';
import {Route,withRouter} from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Auction/Main'
import Cookie from 'universal-cookie'
import {keepLogin} from './1.actions'
import {connect} from 'react-redux'

const cookie = new Cookie()

class App extends Component {
  componentDidMount(){
    var dataCookie=cookie.get('userData') 
    if(dataCookie!==undefined){
      this.props.keepLogin(dataCookie)
    }
  }
  
  
  render() {
    return (
      <div>
          {/* <Route path="/" component={Home} exact/> */}
          <Route path='/' component={Main} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
      </div>
    );
  }
}

export default withRouter(connect(null,{keepLogin})(App));

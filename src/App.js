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
import CreateAuction from './components/Auction/CreateAuction';
import MyAuction from './components/Auction/MyAuction'
import ManageCategory from './components/Auction/ManageCategory';
import Cart from './components/Auction/Cart'
import ProductCategoryList from './components/Auction/ProductCategoryList';
import OurWinners from './components/Auction/OurWinners';
import NewToday from './components/Auction/NewToday';
import AllCategories from './components/Auction/AllCategories';
import ManageProduct from './components/Auction/ManageProduct'


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
          <Route path="/" component={Main} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/createauction" component={CreateAuction} exact/>
          <Route path="/myauction" component={MyAuction} exact/>
          <Route path="/managecategory" component={ManageCategory} exact/>
          <Route path="/manageauction" component={ManageProduct} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/product/:category" component={ProductCategoryList} exact/>
          <Route path="/winners" component={OurWinners} exact/>
          <Route path="/newtoday" component={NewToday} exact/>
          <Route path="/allcategories" component={AllCategories} exact/>
      </div>
    );
  }
}

export default withRouter(connect(null,{keepLogin})(App));

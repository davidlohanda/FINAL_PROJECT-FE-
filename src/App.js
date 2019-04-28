import React, { Component } from 'react';
import './App.css';
import {Route,withRouter,Switch} from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Auction/Main'
import Cookie from 'universal-cookie'
import {keepLogin,cookieChecked} from './1.actions'
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
import Loader from 'react-loader-spinner'
import ScrollToTop from './components/ScrollToTop'
import HistoryTransaction from './components/Auction/HistoryTransaction';


const cookie = new Cookie()

class App extends Component {
  componentDidMount(){
    var dataCookie=cookie.get('userData') 
    if(dataCookie!==undefined){
      this.props.keepLogin(dataCookie)
    }else{
      this.props.cookieChecked()
    }
  }
  
  render() {
    if(this.props.cookie){
      return (
        <div>

            <ScrollToTop>
              <Switch>
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
                <Route path="/historytransaction" component={HistoryTransaction} exact/>
              </Switch>
            </ScrollToTop>
        </div>
      );
    }else{
      return <div className='centervh'>
    <Loader
      type="Bars"
      color="#00BFFF"
      height="100"	
      width="100"
      />
    </div>
    }
  }
}

const mapStateToProps = (state) => {
  return{
    cookie : state.user.cookie
  }
}

export default withRouter(connect(mapStateToProps,{keepLogin,cookieChecked})(App));

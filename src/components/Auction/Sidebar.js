import React from 'react'
import '../../support/css/sidebar.css'
import {connect} from 'react-redux'
import {resetUser,resetCount} from '../../1.actions'
import Cookie from 'universal-cookie'
import {Redirect,Link} from 'react-router-dom'

const cookie = new Cookie()

class Sidebar extends React.Component{
    
    btnSignOut=()=>{
        cookie.remove('userData')
        this.props.resetUser()
        this.props.resetCount()
      }
    
    render(){
        if(this.props.username === ""){
            return <Redirect to="/"/>
          }
        if(this.props.role === 'admin'){
            return(
                <div className="header fixed-top">
                    <Link to="/"><h2 class="logo">Gotcha</h2></Link>
                    <input type="checkbox" id="chk"/>
                    <label for="chk" class="show-menu-btn">
                        <i className="fas fa-ellipsis-h"/>
                    </label>
                    <ul class="menu">
                        <span className="welcome">-{this.props.username} / Admin-</span>
                        <Link to="/managecategory"><span>Manage Category</span></Link>
                        <Link to="/manageauction"><span>Manage Auction</span></Link>
                        <Link to="/managetransactions"><span>Manage Transaction</span></Link>
                        <span onClick={this.btnSignOut}>Sign Out</span>
                        <label for="chk" className="hide-menu-btn">
                            <i className="fas fa-times"/>
                        </label>
                    </ul>
                </div>
            )    
        }else if(this.props.role === 'user'){
            return(
                <div className="header fixed-top">
                    <Link to="/"><h2 class="logo">Gotcha</h2></Link>
                    <input type="checkbox" id="chk"/>
                    <label for="chk" class="show-menu-btn">
                        <i className="fas fa-ellipsis-h"/>
                    </label>
                    <ul class="menu">
                        <span className="welcome">-{this.props.username}-</span>
                        <Link to="/myauction"><span>My Auction</span></Link>
                        <Link to="/createauction"><span>Create Auction</span></Link>    
                        <Link to="/cart"><span>Cart</span></Link>
                        <Link to="/confirmation"><span>Transaction Confirmation</span></Link>
                        <Link to="/historytransaction"><span>History Transaction</span></Link>
                        <span onClick={this.btnSignOut}>Sign Out</span>
                        <label for="chk" className="hide-menu-btn">
                            <i className="fas fa-times"/>
                        </label>
                    </ul>
                </div>
            )
        }
    }
}

const mapStateToProps=(state)=>{
    return{
      username: state.user.username,
      role : state.user.role
    }
  }
  
  export default connect(mapStateToProps,{resetUser,resetCount})(Sidebar) 
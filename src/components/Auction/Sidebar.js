import React from 'react'
import '../../support/css/sidebar.css'
import {connect} from 'react-redux'
import {resetUser} from '../../1.actions'
import Cookie from 'universal-cookie'
import {Redirect,Link} from 'react-router-dom'

const cookie = new Cookie()

class Sidebar extends React.Component{
    
    btnSignOut=()=>{
        cookie.remove('userData')
        this.props.resetUser()
      }
    
    render(){
        if(this.props.username === ""){
            return <Redirect to="/"/>
          }
        return(
            <div className="header fixed-top">
                <h2 class="logo">Gotcha</h2>
                <input type="checkbox" id="chk"/>
                <label for="chk" class="show-menu-btn">
                    <i className="fas fa-ellipsis-h"/>
                </label>
                <ul class="menu">
                    <span className="welcome">-{this.props.username}-</span>
                    <Link to="/myauction"><span>My Auction</span></Link>
                    <Link to="/createauction"><span>Create Auction</span></Link>    
                    <span>Cart</span>
                    <span onClick={this.btnSignOut}>Sign Out</span>
                    <label for="chk" className="hide-menu-btn">
                        <i className="fas fa-times"/>
                    </label>
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      username:state.user.username
    }
  }
  
  export default connect(mapStateToProps,{resetUser})(Sidebar) 
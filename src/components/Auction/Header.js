import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem 
import '../../support/css/styleHeader.css'
import logo from '../../img/Gotcha.png'
import {connect} from 'react-redux'
import {resetUser} from '../../1.actions'
import Cookie from 'universal-cookie'
import {Redirect,Link} from 'react-router-dom'

const cookie = new Cookie()

class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      btnSignOut=()=>{
        cookie.remove('userData')
        this.props.resetUser()
      }
    
    render(){
      if(this.props.username === ""){
        return <Redirect to="/"/>
      }
        return(
          <div>
          <Navbar style={{backgroundColor:'#5f0a87'}} dark expand="md">
            <div className="container">
              <NavbarBrand><img src={logo} width="70px" alt=""/></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/myauction"><NavLink>My Auction </NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/createauction"><NavLink>Create Auction</NavLink></Link>
                  </NavItem>
                  <NavItem>
                    <NavLink href="">Cart</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="" onClick={this.btnSignOut}>Sign Out</NavLink>
                  </NavItem>
                  <NavItem>
                    <h1 style={{color: 'yellow', fontSize:'25px', marginLeft:'20px'}}>Hi,{this.props.username}!</h1>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    username:state.user.username
  }
}

export default connect(mapStateToProps,{resetUser})(Header) 
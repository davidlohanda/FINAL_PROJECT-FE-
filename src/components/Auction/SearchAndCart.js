import React from 'react'
import {connect} from 'react-redux'
import {cartCount} from '../../1.actions'



class SearchAndCart extends React.Component{
    componentDidMount(){
        this.props.cartCount(this.props.username)
    }
    
    render(){
        return(
            <div className="content-nav">
                    <div className="content-nav-2">
                        {/* <span><i class="fas fa-search"></i><input type="text" placeholder="Search"></input></span> */}
                    </div>
                    <div className="content-nav-3">
                        <span><i class="fas fa-shopping-bag"></i></span>&nbsp;{this.props.cart}
                    </div>
                </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        username:state.user.username,
        cart : state.cart.count
    }
}
export default connect(mapStateToProps, {cartCount})(SearchAndCart)
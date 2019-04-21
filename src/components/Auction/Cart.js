import React from 'react'
import {Link} from 'react-router-dom'
import '../../support/css/cart.css'
import axios from 'axios'
import cookie from 'universal-cookie'
import {connect} from 'react-redux'

const Cookie = new cookie()

class Cart extends React.Component{
    state={cart:[]}

    componentDidMount(){
        this.getDataCart()
    }

    getDataCart = () => {
        axios.get(`http://localhost:2000/bidder/getCart/${Cookie.get('userData')}`)
        .then((res) => {
            console.log(res.data)
            this.setState({cart : res.data})
        })
        .catch((err) => console.log(err))
    }

    renderJsx = () => {
        var jsx = this.state.cart.map((val,i) => {
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{val.product_name}</td>
                    <td>Rp.{val.bid_price}</td>
                </tr>
            )
        })
        return jsx
    }

    render(){
        if(this.state.cart.length === 0){
            return(
                <div>
                    <div>
                        <div className="top">
                        <div className="top-1"><Link to="/" style={{color:'#000'}}><i class="fas fa-arrow-left"></i></Link></div>
                        <div className="top-2">Cart</div>
                        <div className="top-3"></div>
                    </div>
                    <div className="mid">
                        <div className="mid-1"></div>
                        <div className="mid-2" style={{fontFamily:' Arial, Helvetica, sans-serif'}}>
                            <p style={{textAlign:'center', marginTop:'40vh', textDecoration:'underline'}}>You're cart is currently empty</p>
                        </div>
                        <div className="mid-3"></div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-1"></div>
                        <div className="bottom-2"></div>
                        <div className="bottom-3"></div> 
                    </div>
                </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div>
                        <div className="top">
                        <div className="top-1"><Link to="/" style={{color:'#000'}}><i class="fas fa-arrow-left"></i></Link></div>
                        <div className="top-2">Cart</div>
                        <div className="top-3"></div>
                    </div>
                    <div className="mid">
                        <div className="mid-1"></div>
                        <div className="mid-2 text-center" style={{fontFamily:' Arial, Helvetica, sans-serif'}}>
                        <div className="container" style={{fontFamily:' Arial, Helvetica, sans-serif',fontSize:'15px'}}>
                                <table className="mt-5 mb-5 table">
                                <tr>
                                    <td>NO</td>
                                    <td>PRODUCT</td>
                                    <td>PRICE</td>
                                </tr>
                                {this.renderJsx()}
                                </table>
                                <button className="btn mt-5" style={{color:'#fff', backgroundColor:'#000'}}>Checkout</button>
                                </div>
                        </div>
                        <div className="mid-3"></div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-1"></div>
                        <div className="bottom-2"></div>
                        <div className="bottom-3"></div> 
                    </div>
                </div>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateToProps)(Cart)
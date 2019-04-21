//Menampilkan barang2 yang pernah dilelang oleh user
import React from 'react'
import axios from 'axios'
import CountDown from 'react-countdown-now'
import {connect} from 'react-redux'
import {cartCount} from '../../1.actions'



class Shop extends React.Component{
    state = {sellAuction : [] , timer : [] , winner : []}

    componentDidMount(){
        this.getAllAuction()
    }

    getWinner = () => {
        axios.get('http://localhost:2000/bidder/winner')
        .then((res) => {
            console.log(res.data)
            this.setState({winner : res.data})
        })
        .catch((err) => console.log(err))
    }

    getAllAuction = () => {
        axios.get('http://localhost:2000/auction/getAllCreateAuction')
        .then((res) => {
            console.log(res.data)
            this.setState({sellAuction : res.data})
        })
        .catch((err) => console.log(err))
    }

    renderer = ({ days, hours, minutes, seconds, completed }) => {
        
        
        if (completed) {
          // Render a completed state
            // this.getWinner()
            return <span style={{color:'red'}}>auction complete</span>

        } else {
          // Render a countdown
          return <span style={{color:'#487eb0', fontWeight:600}}>{days}d:{hours}h:{minutes}m:{seconds}s</span>;
        }
      };

    
    onBtnBidClick = (val) => {
        axios.get(`http://localhost:2000/login/getUserByUsername?username=${this.props.username}`)
        .then((res) => {
            console.log(res.data)
            axios.put(`http://localhost:2000/bidder/makeABid/${val.id}`, {
                new_product_price : val.product_price + val.add_price,
                product_id : val.id,
                user_id :res.data[0].id
            })
            .then((res1)=>{
                alert(res1.data)
                this.getAllAuction()
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }

    updateAndDelete = (val) => {
        alert('masuk')
        axios.get(`http://localhost:2000/bidder/winner/${val.id}`)
        .then((res) => {
            if(res.data.length === 0){
                alert('no bidder!')
                axios.delete(`http://localhost:2000/auction/deleteCreateAuction?id=${val.id}&imageBefore=${val.product_image}`)
                .then((res) => {
                    console.log(res)
                    this.getAllAuction()
                })
                .catch((err) => console.log(err))
            }else{
            var dataCart = {
                user_id : res.data[0].user_id,
                product_id : res.data[0].product_id,
                bid_price : res.data[0].bid_price,
                product_name : res.data[0].product_name
            }
            axios.post('http://localhost:2000/bidder/addtocart' , dataCart)
            .then((res) => {
                this.props.cartCount(this.props.username)
                axios.delete(`http://localhost:2000/auction/deleteCreateAuction?id=${val.id}&imageBefore=${val.product_image}`)
                .then((res) => {
                    console.log(res)
                    this.getAllAuction()
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
            }
        })
        .catch((err) => console.log(err))
    }

    renderSellAuction = () => {
        var jsx = this.state.sellAuction.map((val) => {
            
            var endDate =  Date.parse(val.duration)
            var now = new Date().getTime()
            var distance = endDate - now
            
            return (
                     <div className="card mt-4 mb-4 col-lg-3 col-md-5 col-12 ml-2" style={{fontSize:'15px', fontFamily:'Arial, Helvetica, sans-serif'}}>
                        <img src={'http://localhost:2000/'+val.product_image} className="img-fluid" style={{height:'40vh'}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center" style={{width:'100%',fontSize:'16px', fontWeight:700}}>{val.product_name}</h5>
                            <hr/>
                            <p className="card-text">Current Price : Rp.{val.product_price}</p>
                            <p><CountDown  date={Date.now() + distance} renderer={this.renderer} on onComplete={()=>this.updateAndDelete(val)}/></p>
                        <button style={{backgroundColor:'#000',color:'#fff', fontSize:'15px'}} className="btn" onClick={()=>this.onBtnBidClick(val)}>Bid for Rp.{val.product_price+val.add_price}</button>
                        </div>
                    </div>
            )
        })
        return jsx
    }

    render(){
        if(this.state.sellAuction.length === 0){
            return(
                <div className="mt-5 row justify-content-center">
                    <p className="mt-5" style={{textDecoration:'underline'}}>No auction yet</p>
                </div>
            )
        }else{
            return(
                <div className="mt-5 row justify-content-center">
                    {this.renderSellAuction()}
                    
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username,
        cart : state.cart.count
    }
}

export default connect(mapStateToProps,{cartCount})(Shop)
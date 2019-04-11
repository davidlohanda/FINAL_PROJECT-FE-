//Menampilkan barang2 yang pernah dilelang oleh user
import React from 'react'
import axios from 'axios'
import CountDown from 'react-countdown-now'
import {connect} from 'react-redux'




class Shop extends React.Component{
    state = {sellAuction : [] , timer : []}

    componentDidMount(){
        this.getAllAuction()
    }
    // componentDidUpdate(){
    //     this.getAllAuction()
    // }


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
        } else {
          // Render a countdown
          return <span style={{color:'red'}}>{days}d:{hours}h:{minutes}m:{seconds}s</span>;
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

    renderSellAuction = () => {
        var jsx = this.state.sellAuction.map((val) => {
            
            var endDate =  Date.parse(val.duration)
            var now = new Date().getTime()
            var distance = endDate - now
            
            return (
                     <div className="card" style={{width: '18rem'}}>
                        <img src={'http://localhost:2000/'+val.product_image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{val.product_name}</h5>
                            <p className="card-text">Current Price : Rp.{val.product_price}</p>
                            <p><CountDown  date={Date.now() + distance} renderer={this.renderer}/></p>
                        <button style={{fontSize:'18px'}} className="btn btn-primary" onClick={()=>this.onBtnBidClick(val)}>Bid for ${val.product_price+val.add_price}</button>
                        </div>
                    </div>
            )
        })
        return jsx
    }

    render(){
        return(
            <div className="container mt-5">
                {this.renderSellAuction()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateToProps)(Shop)
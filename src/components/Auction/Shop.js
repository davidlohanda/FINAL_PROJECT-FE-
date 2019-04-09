//Menampilkan barang2 yang pernah dilelang oleh user
import React from 'react'
import axios from 'axios'
import CountDown from 'react-countdown-now'





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
                            <p className="card-text">Rp.{val.product_price}</p>
                            <p><CountDown  date={Date.now() + distance} renderer={this.renderer}/></p>
                        <a href="/" className="btn btn-primary">Bid</a>
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

export default Shop
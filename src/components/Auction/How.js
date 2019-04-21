import React from 'react'
import '../../support/css/how.css'

class How extends React.Component{
    render(){
        return(
            <div className="mt-5 wrap img-fluid">
                <div className="caption">
                    <p className="cap-title">BID, WIN AND CLOSE WITH CONFIDENCE</p>
                    <p>Our auction buying process is simple, efficient, and transparent.</p>
                </div>
            <div className="how">
                <div className="how1 text-center mt-4">
                    <p><i class="fas fa-search fa-3x"></i></p>
                    <p className="how-title">Find Your Products</p>
                    <p>Search , track and reasearch your products</p>
                </div>
                <div className="how2 text-center mt-4">
                    <p><i className="fas fa-money-bill-wave fa-3x" /></p>
                    <p className="how-title">Start Bidding</p>
                    <p>Bid at live and online auctions</p>
                </div>
                <div className="how3 text-center mt-4">
                    <p><i className="far fa-laugh-beam fa-3x" /></p>
                    <p className="how-title">Win The Auction</p>
                    <p>We're here to support you post-auction</p>
                </div>
            </div>
            </div>
        )
    }
}

export default How
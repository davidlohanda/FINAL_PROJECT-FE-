import React from 'react'
import '../../support/css/bestandall.css'
import {Link} from 'react-router-dom'

class BestAndAll extends React.Component{
    render(){
        return(
            <div className="bestAll">
                <div className="bestAll1">
                    <Link to="/allcategories" style={{color:'black', textDecoration:'none'}}><p>All Categories</p></Link>
                </div>
                <div className="bestAll2">
                    <p>Best Deals</p>
                </div>
            </div>
        )
    }
}

export default BestAndAll
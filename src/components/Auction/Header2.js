import React from 'react'
import '../../support/css/header2.css'
import {Link} from 'react-router-dom'

class Header2 extends React.Component{
    render(){
        return(
            <div className="header2 mt-5">
                <Link to="/product/1"><span>Property</span></Link>
                <Link to="/product/2"><span>Automotive</span></Link>
                <Link to="/product/4"><span>Watch</span></Link>
            </div>
        )
    }
}

export default Header2
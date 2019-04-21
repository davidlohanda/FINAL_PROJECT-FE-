import React from 'react'
import '../support/css/main.css'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="decortop">
                    <div className="decor-1">
                        <p className="animated fadeInDown">GOTCHA</p>
                    </div>
                </div>
                <div className="canvas">
                    <div className="canvas-1">
                        <Link to="/login" style={{color:'black'}}><p className="animated fadeInUp delay-1s">Login</p></Link>
                    </div>
                    <div className="canvas-2">
                        <Link to="/register" style={{color:'black'}}><p className="animated fadeInUp delay-2s">Register</p></Link>
                    </div>
                    <div className="canvas-3 animated fadeInUp delay-3s">
                        <p  className="how-title">How it work?</p>
                        <div className="howTo">
                            <p><i className="fas fa-home" /> Register</p>
                            <p><i className="fas fa-money-bill-wave" /> Buy or Bid</p>
                            <p><i className="fas fa-gavel" /> Submit a Bid</p>
                            <p><i className="far fa-laugh-beam" /> Win</p>
                        </div>
                    </div>
                </div>
                <div className="decorbottom">
                    <div className="decor-1">

                    </div>
                </div>
            </div>
        )
    }
}

export default Home
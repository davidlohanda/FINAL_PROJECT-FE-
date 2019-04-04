import React from 'react'
import {Link} from 'react-router-dom'
import '../support/css/styleHome.css'
import man from '../img/man_PNG6513.png'
import logo from '../img/Gotcha.png'


class Home extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="tone-1">
                    <div className="text-home">
                        <img src={logo} className="animated heartBeat" alt=""/>
                        <p className="animated zoomIn delay-1s">Bidders Are Winners</p>
                        <div className="btn animated fadeInUp delay-2s">
                            <Link to="/login" style={{textDecoration:'none'}}><p>Login</p></Link>
                            <Link to="/register" style={{textDecoration:'none'}}><p>Register</p></Link>
                        </div>
                    </div>
                </div>
                <div className="tone-2">
                    <img className="animated bounceIn delay-2s" src={man} alt=""/>
                    <div className="infos animated fadeInUp delay-3s">
                        <div className="infos-title animated fadeInUp delay-3s">
                            <h1>How it work?</h1>
                        </div>
                        <div className="info1 animated fadeInUp delay-4s">
                            <h3><i className="fas fa-home" /> Register</h3>
                        </div>
                        <div className="info1 animated fadeInUp delay-4s">
                            <h3><i className="fas fa-money-bill-wave" /> Buy or Bid</h3>
                        </div>
                        <div className="info1 animated fadeInUp delay-4s">
                            <h3><i className="fas fa-gavel" /> Submit a Bid</h3>
                        </div>
                        <div className="info1 animated fadeInUp delay-4s">
                            <h3><i className="far fa-laugh-beam" /> Win</h3>
                        </div>
                    </div>
                </div>
      </div>
        )
    }
}

export default Home
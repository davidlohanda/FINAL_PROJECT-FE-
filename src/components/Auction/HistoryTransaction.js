import React from 'react'
import '../../support/css/ourwinners.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import '../../support/css/history.css'

class HistoryTransaction extends React.Component{
    state={history:[]}

    componentDidMount(){
        this.getHistory()
    }

    getHistory = () => {
        axios.get(`http://localhost:2000/bidder/history?username=${this.props.username}`)
        .then((res) => {
            this.setState({history : res.data})
        })
        .catch((err) => console.log(err))
    }

    renderJsx = () => {
        var jsx = this.state.history.map((val,i) => {
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{val.product}</td>
                    <td>{val.date}</td>
                    <td>Rp.{val.total}</td>
                    <td>{val.status}</td>
                </tr>
            )
        })
        return jsx
    }
    
    render(){
        if(this.state.history.length === 0){
            return(
                <div>
                    <div className="top">
                    <div className="top-1"><Link to="/" style={{color:'#000'}}><i class="fas fa-arrow-left"></i></Link></div>
                    <div className="top-2">History Transaction</div>
                    <div className="top-3"></div>
                </div>
                <div className="mid">
                    <div className="mid-1"></div>
                    <div className="mid-2" style={{fontFamily:' Arial, Helvetica, sans-serif'}}>
                        <p style={{textAlign:'center', marginTop:'40vh', textDecoration:'underline'}}>No history transaction yet</p>
                    </div>
                    <div className="mid-3"></div>
                </div>
                <div className="bottom">
                    <div className="bottom-1"></div>
                    <div className="bottom-2"></div>
                    <div className="bottom-3"></div> 
                </div>
            </div>
            )
        }else{
            return(
                <div>
                        <div className="top">
                            <div className="top-1"><Link to="/" style={{color:'#000'}}><i class="fas fa-arrow-left"></i></Link></div>
                            <div className="top-2">History Transaction</div>
                            <div className="top-3"></div>
                        </div>
                        <div className="mid">
                            <div className="mid-1"></div>
                            <div className="mid-2 text-center">
                                <div className="container" style={{fontFamily:' Arial, Helvetica, sans-serif',fontSize:'15px'}}>
                                <table className="mt-5 mb-5 table">
                                <tr>
                                    <td>NO</td>
                                    <td>PRODUCT</td>
                                    <td>DATE</td>
                                    <td>TOTAL</td>
                                    <td>STATUS</td>
                                </tr>
                                {this.renderJsx()}
                                </table>
                                
                                </div>
                            </div>
                            <div className="mid-3">

                            </div>
                        </div>
                        <div className="bottom">
                            <div className="bottom-1"></div>
                            <div className="bottom-2"></div>
                            <div className="bottom-3"></div>
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

export default connect(mapStateToProps)(HistoryTransaction)
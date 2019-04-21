import React from 'react'
import Sidebar from './Sidebar';
import Header2 from './Header2'
import Bigetron from './Bigetron';
import Shop from './Shop'
import Footer from './Footer'
import NewAndEnd from './NewAndEnd'
import Cookie from 'universal-cookie'
import Home from '../../components/Home'
import {connect} from 'react-redux'
import '../../support/css/mainauction.css'
import BestAndAll from './BestAndAll';
import How from './How';
import SearchAndCart from './SearchAndCart'



const cookie = new Cookie()
const dataCookie = cookie.get('userData')


class Main extends React.Component{
    render(){
        if(this.props.username === ''){
            return <Home/>
        }
        return(
            <div>
                <div>
                    <Sidebar username ={dataCookie}/>
                    <Header2/>
                </div>
                <div className="container text-center mt-5 mb-5">
                    <Bigetron/>
                </div>
                <div>
                    <SearchAndCart/>
                </div>
                <div>
                    <BestAndAll/>
                    <NewAndEnd/>
                </div>
                <div className="container">
                    <Shop/>
                </div>
                <div>
                    <How/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        username:state.user.username,
        cart : state.cart.count
    }
}
export default connect(mapStateToProps)(Main)

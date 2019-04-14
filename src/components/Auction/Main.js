import React from 'react'
import Sidebar from './Sidebar';
import Header2 from './Header2'
import Bigetron from './Bigetron';
import Shop from './Shop'
import Footer from './Footer'
import Cookie from 'universal-cookie'
import Home from '../../components/Home'
import {connect} from 'react-redux'
import '../../support/css/mainauction.css'



const cookie = new Cookie()
const dataCookie = cookie.get('userData')


class Main extends React.Component{
    render(){
        if(this.props.username === ''){
            return <Home/>
        }
        return(
            <div>
                <Sidebar username ={dataCookie}/>
                <Header2/>
                <div className="container text-center mt-5">
                    <Bigetron/>
                </div>
                <div className="content-nav mt-5">
                    <div className="content-nav-2">
                        <span><i class="fas fa-search"></i><input type="text" placeholder="Search"></input></span>
                    </div>
                    <div className="content-nav-3">
                        <span><i class="fas fa-shopping-bag"></i></span>&nbsp;0
                    </div>
                </div>
                <Shop/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        username:state.user.username
    }
}
export default connect(mapStateToProps)(Main)

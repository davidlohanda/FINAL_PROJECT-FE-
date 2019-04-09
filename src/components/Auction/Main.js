import React from 'react'
import Header from './Header'
import Bigetron from './Bigetron';
import Shop from './Shop'
import Cookie from 'universal-cookie'
import Home from '../../components/Home'
import {connect} from 'react-redux'


const cookie = new Cookie()
const dataCookie = cookie.get('userData')


class Main extends React.Component{
    render(){
        if(this.props.username === ''){
            return <Home/>
        }
        return(
            <div>
                <Header username={dataCookie}/>
                <Bigetron/>
                <Shop/>
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

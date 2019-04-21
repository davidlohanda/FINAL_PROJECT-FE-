import React from 'react'
import '../../support/css/newandend.css'
import {Link} from 'react-router-dom'

class NewAndEnd extends React.Component{
    render(){
        return(
            <div className="newEnd">
                <div className="newEnd1">
                    <Link to="/newtoday" style={{color:'black', textDecoration:'none'}}><p>New Today</p></Link>
                </div>
                <div className="newEnd2">
                    <Link to="/winners" style={{color:'black', textDecoration:'none'}}><p>Our Winners</p></Link>
                </div>
            </div>
        )
    }
}

export default NewAndEnd
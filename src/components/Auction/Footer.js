import React from 'react'
import '../../support/css/footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="social-media">
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span><i class="fab fa-twitter"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                </div>
                <div className="poweredby">
                    <p>David Lohanda &copy; 2019 </p>
                </div>
            </div>
        )
    }
}

export default Footer
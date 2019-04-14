import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class CreateAuction extends React.Component{
    state={imageFile : null , owner : null, error:'', duration:null}
    valueHandler=()=>{
      return this.state.imageFile? this.state.imageFile.name : 'Upload Image'
    }
    
    onChangeHandler=(e)=>{
      this.setState({imageFile:e.target.files[0]})
    }

    getOwnerId=()=>{
      console.log(this.props.username)
      axios.get('http://localhost:2000/login/getUserByUsername', {params:{username : this.props.username}})
      .then((res)=>{
        console.log(res.data[0].id)
        this.setState({owner : res.data[0].id})
      })
      alert(this.state.owner)
      console.log(this.state.owner)
    }

    btnCreateAuction=()=>{
      var data = {
        owner : this.props.username,
        product_name : this.refs.product_name.value,
        product_price : this.refs.product_price.value,
        add_price : this.refs.addPrice.value,
        product_desc : this.refs.product_desc.value,
        duration : this.refs.endDate.value
      }
      var fd = new FormData()
      fd.append('img' , this.state.imageFile)
      fd.append('product' , JSON.stringify(data))
      axios.post('http://localhost:2000/auction/createAuction' , fd)
      .then((res)=>{
        if(res.data.error){
          this.setState({error : res.data.msg})
        }else{
          alert(res.data)
        }
      })
      .catch((err)=>console.log(err))
    }
    
   


    render(){
        return <div>
              <div className="top">
                  <div className="top-1"><Link to="/" style={{color:'#000'}}><i class="fas fa-arrow-left"></i></Link></div>
                  <div className="top-2">Create Auction</div>
                  <div className="top-3"></div>
              </div>
            <div className="mid">
                <div className="mid-1"></div>
                <div className="mid-2">
                        <div className="container p-5 mt-4" style={{backgroundColor: '#fff', color: '#000', fontFamily:' Arial, Helvetica, sans-serif', fontSize:'15px'}}>
                      <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control mb-4" id="productName" placeholder="Product Name" ref="product_name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="productPrice">Product Price (Rp.)</label>
                        <input type="number" className="form-control mb-4" id="productPrice" placeholder="Product Price" ref="product_price" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="addPrice">Add Price (Rp.)</label>
                        <input type="number" className="form-control mb-4" id="productPrice" placeholder="Add Price While Bidding" ref="addPrice" required />
                      </div>
                      <div className="form-groups">
                        <label htmlFor="endTime">End of Auction</label>
                        <input type="datetime-local" className="form-control mb-4" id="endTime" ref="endDate" required/>
                      </div>
                      <div className="form-groups">
                        <label htmlFor="productImage">Product Image</label>
                        <input type="file" style={{display:'none'}} ref="upload" className="form-control" id="productImage" onChange={this.onChangeHandler} required/>
                        <input type="button" className="form-control btn mb-4" style={{marginTop:'-5px',fontSize:'15px', backgroundColor:'#000', color:'#fff'}} value={this.valueHandler()} onClick={()=>this.refs.upload.click()} />
                      </div>
                      <div className="form-groups">
                        <label htmlFor="productDesc">Product Description</label>
                        <textarea className="form-control mb-4" placeholder="Product Description" id="productDesc" rows={3} defaultValue={""} ref="product_desc" required/>
                      </div>
                      <button onClick={this.btnCreateAuction} className="btn mt-3" style={{fontSize:'15px', backgroundColor:'#000', color:'#fff'}}>
                        Create Auction
                      </button>
                      {
                        this.state.error?<p style={{color:'red'}}>Error : {this.state.error}</p> : null
                      }
                  </div>
                </div>
                <div className="mid-3"></div>
            </div>
            <div className="bottom">
                <div className="bottom-1"></div>
                <div className="bottom-2"></div>
                <div className="bottom-3"></div>
            </div>
        </div>   
    }
}

const mapStateToProps=(state)=>{
  return{
    username : state.user.username
  }
}

export default connect(mapStateToProps)(CreateAuction)
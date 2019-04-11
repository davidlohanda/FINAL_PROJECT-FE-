import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Cookie = new cookie()

class MyAuction extends React.Component{
    state={myAuction : [] , dataEdit : {} , selectedFileImageEdit : null , modal : false}
    componentDidMount(){
        this.getMyAuction()
    }

    getMyAuction = () => {
        axios.get(`http://localhost:2000/auction/getCreateAuctionByUsername?owner=${Cookie.get('userData')}`)
        .then((res) => {
            console.log(this.props.username)
            console.log(res.data)
            this.setState({myAuction : res.data})
        })
        .catch((err) => console.log(err))
    }

    renderJsx = () => {
        var jsx = this.state.myAuction.map((val,i) => {
            return (
                <tr>
                    <td>{i+1}</td>
                    <td> {val.product_name} </td>
                    <td> {val.product_price} </td>
                    <td> <img src = {'http://localhost:2000/' + val.product_image} 
                      width = '50px' alt=""/>  
                    </td>
                    <td> <input type = 'button' className='btn btn-info'  value='edit' onClick={()=>{this.setState({modal : true , dataEdit : val})}} style={{fontSize:'18px', marginTop:'-2px'}}/> </td>
                    <td> <input type = 'button' className='btn btn-danger' value='delete' onClick={()=>this.onBtnDeleteClick(val)} style={{fontSize:'18px', marginTop:'-2px'}}/> </td>        
              </tr>
            )
        })
        return jsx
    }

    valueHandlerEdit = () => {
        return this.state.selectedFileImageEdit? this.state.selectedFileImageEdit.name : 'Edit Picture'
    }

    onChangeHandlerEdit = (e) => {
        this.setState({selectedFileImageEdit : e.target.files[0]})
    }

    onBtnSaveClick = () => {
        var data = {
            product_name : this.refs.product_nameEdit.value ? this.refs.product_nameEdit.value : this.state.dataEdit.product_name,
            product_price : this.refs.product_priceEdit.value ? this.refs.product_priceEdit.value : this.state.dataEdit.product_price,
            add_price : this.refs.add_priceEdit.value ? this.refs.add_priceEdit.value : this.state.dataEdit.add_price,
            product_desc : this.refs.product_descEdit.value ? this.refs.product_descEdit.value : this.state.dataEdit.product_desc
        }
        console.log(this.state.dataEdit.product_image)
        if(this.state.selectedFileImageEdit){
            console.log(this.state.dataEdit.product_image)
            var fd = new FormData()
            fd.append('editImg' , this.state.selectedFileImageEdit)
            fd.append('editAuction' , JSON.stringify(data))
            fd.append('imageBefore' , this.state.dataEdit.product_image)
            axios.put(`http://localhost:2000/auction/editCreateAuction?id=${this.state.dataEdit.id}`, fd)
            .then((res) => {
                alert(res.data)
                this.setState({modal : false})
                this.getMyAuction()
            })
            .catch((err) => console.log(err))
        }else{
            console.log(this.state.dataEdit.product_image)
            axios.put(`http://localhost:2000/auction/editCreateAuction?id=${this.state.dataEdit.id}`, data)
            .then((res) => {
                alert(res.data)
                this.setState({modal : false})
                this.getMyAuction()
            })
            .catch((err) => console.log(err))
        }
    }
    
    onBtnDeleteClick = (val) => {
        console.log(val.product_image)
        axios.delete(`http://localhost:2000/auction/deleteCreateAuction?id=${val.id}&imageBefore=${val.product_image}`)
        .then((res)=>{
            alert(res.data)
            this.getMyAuction()
        })
    }

    render(){
        return(
            <div>
                <h1>My Auction Product</h1>
                <table className='table mt-5'>
                <tr>
                    <td>NO</td>
                    <td>NAMA</td>
                    <td>HARGA</td>
                    <td>IMAGE</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
                {this.renderJsx()}
                </table>

                {/* =============MODAL================= */}
                <div>
                    <Modal isOpen={this.state.modal} toggle={()=>{this.setState({modal : false})}} className={this.props.className}>
                    <ModalHeader toggle={()=>{this.setState({modal : false})}}>Edit - {this.state.dataEdit.product_name}</ModalHeader>
                    <ModalBody>
                    <div className='row'> 
                        <div className='col-md-3'>
                            <img src={'http://localhost:2000/' + this.state.dataEdit.product_image} width='100%' alt='broken' />
                            <input type='file' onChange={this.onChangeHandlerEdit} style={{display:'none'}} ref='inputEdit' />
                            <input type='button' value={this.valueHandlerEdit()} className='btn btn-primary' 
                            onClick={ () =>this.refs.inputEdit.click()} style={{fontSize:'14px', marginTop:'3px',width:'100%'}} />
                        </div>
                        <div className='col-md-9'>
                            <label>Product Name</label> 
                            <input type='text' className='form-control' 
                            defaultValue={this.state.dataEdit.product_name} ref='product_nameEdit' />
                            
                            <label className="mt-3">Product Price</label>
                            <input type='number' className='form-control' 
                            defaultValue={this.state.dataEdit.product_price} ref='product_priceEdit' />
                            
                            <label className="mt-3">Product Add Price</label>
                            <input type='number' className='form-control' 
                            defaultValue={this.state.dataEdit.add_price} ref='add_priceEdit' />

                            <label className="mt-3">Product Description</label>
                            <textarea className="form-control" defaultValue={this.state.dataEdit.product_desc} id="productDesc" rows={3} ref="product_descEdit" required/>
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onBtnSaveClick} style={{fontSize:'18px', marginTop:'-2px'}}>Save</Button>{' '}
                        <Button color="secondary" onClick={()=>{this.setState({modal : false})}} style={{fontSize:'18px', marginTop:'-2px'}}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state )=> {
    return{
      username : state.user.username
    }
}


export default connect(mapStateToProps)(MyAuction)
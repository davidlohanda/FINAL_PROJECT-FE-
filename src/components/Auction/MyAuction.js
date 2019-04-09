import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Cookie = new cookie()

class MyAuction extends React.Component{
    state={myAuction : [] , dataEdit : {} , selectedFileImageEdit : null}
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
                    <td> <input type = 'button' className='btn btn-info'  value='edit' style={{fontSize:'18px', marginTop:'-2px'}}/> </td>
                    <td> <input type = 'button' className='btn btn-danger' value='delete' style={{fontSize:'18px', marginTop:'-2px'}}/> </td>        
              </tr>
            )
        })
        return jsx
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

                <div>
                    <Modal isOpen={this.state.modal} toggle={() => this.setState({modal:false})} className={this.props.className}>
                        <ModalHeader toggle={() => this.setState({modal:false})}>Edit Product ~ {this.state.dataEdit.product_name}</ModalHeader>
                        <ModalBody>
                        <div className='row'> 
                            <div className='col-md-3'>
                            <img src={'http://localhost:4000/' + this.state.dataEdit.product_image} width='100%' alt='broken' />
                            <input type='file' onChange={this.onChangeHandlerEdit} style={{display:'none'}} ref='inputEdit' />
                            <input type='button' value={this.valueHandlerEdit()} className='btn btn-primary' 
                                    onClick={ () =>this.refs.inputEdit.click()} />
                            </div>
                            <div className='col-md-9'> 
                            <input type='text' className='form-control' 
                            placeholder={this.state.dataEdit.product_name} ref='namaEdit' />
                            <input type='number' className='form-control mt-3' 
                            placeholder={this.state.dataEdit.product_price} ref='hargaEdit' />
                            </div>
                        </div>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.onSaveBtnClick}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => this.setState({modal:false})}>Cancel</Button>
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
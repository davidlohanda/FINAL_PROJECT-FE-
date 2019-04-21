<div className="container" style={{backgroundColor: '#fff', color: '#000', fontFamily:' Arial, Helvetica, sans-serif', fontSize:'15px'}}>
  <div className="form-group">
    <label htmlFor="productName">Product Name</label>
    <input type="text" className="form-control" id="productName" placeholder="Product Name" ref="product_name" required />
  </div>
  <div className="form-group">
    <label htmlFor="productPrice">Product Price (Rp.)</label>
    <input type="number" className="form-control" id="productPrice" placeholder="Product Price" ref="product_price" required />
  </div>
  <div className="form-group">
    <label htmlFor="addPrice">Add Price (Rp.)</label>
    <input type="number" className="form-control" id="productPrice" placeholder="Add Price While Bidding" ref="addPrice" required />
  </div>
  <div className="form-group">
    <label htmlFor="endTime">End of Auction</label>
    <input type="datetime-local" className="form-control" id="endTime" ref="endDate" required/>
  </div>
  <div className="form-group">
    <label htmlFor="productImage">Product Image</label>
    <input type="file" style={{display:'none'}} ref="upload" className="form-control" id="productImage" onChange={this.onChangeHandler} required/>
    <input type="button" className="form-control btn" style={{marginTop:'-5px',fontSize:'15px', backgroundColor:'#000', color:'#fff'}} value={this.valueHandler()} onClick={()=>this.refs.upload.click()} />
  </div>
  <div className="form-group">
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
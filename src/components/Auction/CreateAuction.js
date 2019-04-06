import React from 'react'


class CreateAuction extends React.Component{
    render(){
        return   <div className="container mt-5 p-5" style={{backgroundColor: '#5f0a87', color: 'white', height: '100%'}}>
        <h1 className="mb-5">Create Your Auction</h1>
        
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" className="form-control" id="productName" placeholder="Product Name" />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price (Rp.)</label>
            <input type="number" className="form-control" id="productPrice" placeholder="Product Price" />
          </div>
          <div className="form-group">
            <label htmlFor="addPrice">Add Price (Rp.)</label>
            <select className="form-control" id="addPrice">
              <option>10000</option>
              <option>50000</option>
              <option>100000</option>
              <option>500000</option>
              <option>1000000</option>
            </select>
          </div>
          <div className="form-groups">
            <label htmlFor="endTime">End of Auction</label>
            <input type="datetime-local" className="form-control" id="endTime" />
          </div>
          <div className="form-groups">
            <label htmlFor="productImage">Product Image</label>
            <input type="file" className="form-control" id="productImage" />
          </div>
          <div className="form-groups">
            <label htmlFor="productDesc">Product Description</label>
            <textarea className="form-control" placeholder="Product Description" id="productDesc" rows={3} defaultValue={""} />
          </div>
          <button className="btn btn-primary">
            Create Auction
          </button>
        
      </div>
    }
}

export default CreateAuction
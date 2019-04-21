import React from 'react'
import Shop from './Shop';
import Sidebar from './Sidebar';
import SearchAndCart from './SearchAndCart';

class AllCategories extends React.Component{
    render(){
        return(
            <div>
                <Sidebar/>
                <div className="mt-5">
                    <SearchAndCart/>
                </div>
                <Shop/>
            </div>
        )
    }
}

export default AllCategories
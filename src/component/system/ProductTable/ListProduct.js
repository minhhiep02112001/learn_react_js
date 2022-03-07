import { react, useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ListProduct({ data }) {
    
    return (
        <div className="container">
            <div className="card" style={{ width: "600px", margin: "10px auto" }}>
                <div className="card-header">
                    <h4 className="text-center">List Product</h4>
                </div>
                <div className="card-body">
                    <table className="table table-sm">
                        <thead>
                            <tr className="pb-3">
                                <th>STT</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index)=> {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.category}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}$</td>
                                            <td> 
                                                <button type="button" className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default ListProduct;
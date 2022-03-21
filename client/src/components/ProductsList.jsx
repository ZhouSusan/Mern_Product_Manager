import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductsList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {
                props.products.map((item, i) => {
                    return (
                        <p key={i}>
                            <Link to={`/${item._id}`} key={item._id}>{item.title}</Link>
                            |
                            <button onClick={(e)=>{deleteProduct(item._id)}}>
                                Delete
                            </button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default ProductsList;
import React from 'react';
import axios from 'axios';

const ProductsList = (props) => {
    return (
        <div>
            {
                props.products.map((item, i) => {
                    return (
                        <p key={i}>{item.title}, {item.price}, {item.description}</p>
                    )
                })
            }
        </div>
    )
}

export default ProductsList;
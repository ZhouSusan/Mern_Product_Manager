import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductsList = (props) => {
    return (
        <div>
            {
                props.products.map((item, i) => {
                    return (
                        <div>
                            <Link to={`/${item._id}`} key={item._id}>{item.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsList;
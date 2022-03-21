import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [item, setItem] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div style={{marginTop: 200}}>
            <h1>{item.title}</h1>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>

            <Link to={"/product/" + item._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}
    
export default Detail;
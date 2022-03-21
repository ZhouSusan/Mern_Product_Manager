import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import {useHistory} from "react-router-dom";
    
const Detail = (props) => {
    const [item, setItem] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setItem(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res =>console.log(res))
            history.push("/")
            .catch(err => console.log(err))
    }
    
    return (
        <div style={{marginTop: 200}}>
            <h1>{item.title}</h1>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>

            <Link to={"/product/" + item._id + "/edit"}>
                Edit
            </Link>
            <br></br>
            <button style={{marginRight: 20}} onClick={deleteProduct}>Delete</button>
            <Link to={"/"}>Go Home</Link>
        </div>
    )
}
    
export default Detail;
import React, { useState } from 'react'
import axios from 'axios';
import styles from './styles.module.css';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}>Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}>Price</label>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className={styles.formDiv}>
                    <label className={styles.formLabel}>Description</label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <button className={styles.createBtn} type="submit">Create</button>
            </form>
        </div>
    )
}

export default ProductForm;

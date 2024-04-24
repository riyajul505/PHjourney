import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData();
    const handleUpdate = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name,email};

        fetch(`http://localhost:5000/users/${data._id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={data.name} id="" /><br />
                <input type="email" name="email" id="" defaultValue={data.email} /><br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;
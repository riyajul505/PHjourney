import { useEffect } from "react";
import { useState } from "react";
import ShowBlog from "./ShowBlog";
// import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleReadMin}) => {
    const [blogs, setblogs] = useState([]);
    useEffect(()=>{
        fetch('../../public/blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
    return (
        <div className="w-[70%]">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map((data,idx) => 
                <ShowBlog key={idx} blog={data} handleBookmark={handleBookmark} handleReadMin={handleReadMin}
                ></ShowBlog>)
            }
        </div>
    );
};


// Blogs.propTypes ={
//     handleBookmark: PropTypes.func,
//     handleReadMin: PropTypes.func
// }

export default Blogs;
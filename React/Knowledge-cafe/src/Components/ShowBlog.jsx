// import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const ShowBlog = ({blog,handleBookmark,handleReadMin}) => {
    // console.log(blog);
   const {title,author,author_img,cover_img,reading_time,hashtag,posted_date
   } = blog;
   
    return (
        <div className='mb-16 space-y-6'>
            <img src={cover_img} alt="" className='w-full' />
            {/* author details and reading time */}
            <div className='flex justify-between justify-center items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img className='h-[50px]' src={author_img} alt=""  />
                    <div className='flex flex-col'>
                        <span>{author}</span>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span>{reading_time} min read</span> <button onClick={()=>handleBookmark(blog)} className='border-none bg-none'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            {/* title */}
            <p className='text-4xl font-bold'>{title}</p>
            {/* hashtags */}
            <div>
                {
                    hashtag.map((data,idx) => <span key={idx} className='mr-2'>#{data}</span>)
                }
            </div>
            <button onClick={()=> handleReadMin(reading_time)} className='text-red-200 underline text-black border-none'>Mark as Read</button>
            
        </div>
    );
};

// ShowBlog.propTypes = {
//     handleReadMin: PropTypes.func,
//     blog: PropTypes.object,
//     handleBookmark: PropTypes.func    

// }

export default ShowBlog;
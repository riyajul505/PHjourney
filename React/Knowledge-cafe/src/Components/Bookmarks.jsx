import ShowBookMTitle from "./ShowBookMTitle";

const Bookmarks = ({bookmarks,readTime}) => {
    // const {title} = bookmarks;
    return (
        <div className="w-[30%] bg-gray-300 ml-4 mt-6">
            <h2>Total Read Time: {readTime} </h2>
            <h1>Bookmark: {bookmarks.length}</h1>
            {
                bookmarks.map((data,idx) => <ShowBookMTitle key={idx} bookmarks={data}></ShowBookMTitle>)
            }

        </div>
    );
};

export default Bookmarks;
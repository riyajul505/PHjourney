
const ShowBookMTitle = ({bookmarks}) => {
    const {title} = bookmarks;
    console.log(bookmarks);
    // console.log(title);
    return (
        <div className="bg-slate-400 p-2 rounded-md m-4">
            <h4>{title}</h4>
        </div>
    );
};

export default ShowBookMTitle;
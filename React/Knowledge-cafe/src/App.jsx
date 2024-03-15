import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (data) => {
    const newBookmark = [...bookmarks, data];
    setBookmarks(newBookmark);
  }
  const handleReadMin = (min) => {
    setReadTime(readTime+min);
  }
  return (
    <>
      <Header></Header>
      <div className="flex container mx-auto">
        <Blogs handleBookmark={handleBookmark} handleReadMin={handleReadMin}></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;

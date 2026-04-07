import React, { useState, useEffect} from 'react';
import "./BookMark.css";
import BookMarkItem from './BookMarkItem';

const BookMark = (props) =>{
    const [bookmarkName, setBookmarkName] = useState(null);
    const [bookmarkUrl, setBookmarkUrl] = useState(null);
    const [bookMarkList, setBookMarkList] = useState([])
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("list"));
        if (storedList) {
        setBookMarkList(storedList);
        }
    }, []);

    function bookMarkHandler(event) {
        event.preventDefault();

        if (!bookmarkName || !bookmarkUrl) return;

        const newBookmark = {
        name: bookmarkName,
        url: bookmarkUrl,
        id: Math.random().toString()
        };

        const updatedList = [...bookMarkList, newBookmark];

        setBookMarkList(updatedList);

        localStorage.setItem("list", JSON.stringify(updatedList));

        setBookmarkName("");
        setBookmarkUrl("");
    }

    const bookmarkNameHandler = (event) =>{
        setBookmarkName(event.target.value);
    }
    const bookmarkUrlHandler = (event) =>{
        setBookmarkUrl(event.target.value);
    }
    const clearListHandler = (event) =>{
        localStorage.removeItem("list");
        setBookMarkList([]);
    }
    return (
        <>
        <div>
            <form className="form-box"onSubmit={bookMarkHandler}>
                <h1>Add book Mark</h1>
                <input type="text" id="bookmarkname" onChange={bookmarkNameHandler} value={bookmarkName}/>
                <input type="text" id="bookmarkurl" onChange={bookmarkUrlHandler} value={bookmarkUrl}/>
                <button type="submit">Add Book Mark</button>
                <button type="button" onClick={clearListHandler}>Clear List</button>
            </form>
            {bookMarkList?.map((bookmark)=>{
                return (<BookMarkItem key={bookmark.id} name={bookmark.name}
                url={bookmark.url}
                />)
            })}
        </div>  

        
        </>
    )
}

export default BookMark;
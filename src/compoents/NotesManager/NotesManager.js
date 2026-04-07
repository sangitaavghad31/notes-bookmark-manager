import React, { useState, useEffect} from 'react';
import "./NotesManager.css";
import NotesItem from './NoteItem';

const NotesManager = (props) =>{
    const [noteName, setNoteName] = useState(null);
    const [noteDescription, setNoteDescription] = useState(null);
    const [date, setDate] = useState("");
    const [noteList, setNoteList]=useState([]);
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("list"));
        if (storedList) {
        setNoteList(storedList);
        }
    }, []);

    function noteHandler(event) {
        event.preventDefault();

        if (!noteName || !noteDescription) return;

        const noteItem = {
        noteName: noteName,
        noteDescription: noteDescription,
        date: date,
        id: Math.random().toString()
        };

        const updatedList = [...noteList, noteItem];

        setNoteList(updatedList);

        localStorage.setItem("list", JSON.stringify(updatedList));

        setNoteName("");
        setNoteDescription("");
        setDate("");

    }

    const noteNameHandler = (event) =>{
        setNoteName(event.target.value);
    }
    const noteDescriptionHandler = (event) =>{
        setNoteDescription(event.target.value);
    }

    const dateHandler = (event) =>{
        setDate(event.target.value);
    }
    const clearListHandler = (event) =>{
        localStorage.removeItem("list");
        setNoteList([]);
    }
    return (
        <>
        <div>
            <form className="form-box"onSubmit={noteHandler}>
                <h1>Add book Mark</h1>
                <input type="text" id="noteName" onChange={noteNameHandler} value={noteName}/>
                <input type="text" id="noteDescription" onChange={noteDescriptionHandler} value={noteDescription}/>
                <input type="date" id="date" onChange={dateHandler} value={date}/>
                <button type="submit">Add Book Mark</button>
                <button type="button" onClick={clearListHandler}>Clear List</button>
            </form>
            {noteList?.map((bookmark)=>{
                const date = new Date(bookmark.date);
                const d = date.getDate();
                const month = date.getMonth()+1;
                const year = date.getFullYear();
                return (<NotesItem key={bookmark.id} 
                    name={bookmark.name}
                description={bookmark.url}
                date={`${d}-${month}-${year}`}
                />)
            })}
        </div>  

        
        </>
    )
}

export default NotesManager;
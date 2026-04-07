import React, { useState, useEffect} from 'react';
import "./NotesManager.css";
import NotesItem from './NoteItem';

const NotesManager = (props) =>{
    const [noteName, setNoteName] = useState(null);
    const [noteDescription, setNoteDescription] = useState(null);
    const [date, setDate] = useState("");
    const [noteList, setNoteList]=useState([]);
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("noteList"));
        if (storedList) {
        setNoteList(storedList);
        }

         return () => {
    localStorage.removeItem("noteList");
  };
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

        localStorage.setItem("noteList", JSON.stringify(updatedList));

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
        localStorage.removeItem("noteList");
        setNoteList([]);
    }
    return (
        <>
        <div>
            <form className="form-box"onSubmit={noteHandler}>
                <h1>Add Note</h1>
                <input 
                    type="text" 
                    id="noteName" 
                    onChange={noteNameHandler} 
                    value={noteName}
                    placeholder='Add Name here'
                    />
                <input 
                    type="text" 
                    id="noteDescription" 
                    onChange={noteDescriptionHandler} 
                    value={noteDescription}
                    placeholder='Add Description here'
                    />
                <input 
                    type="date" 
                    id="date" 
                    onChange={dateHandler} 
                    value={date}/>
                <button type="submit">Add Note</button>
                <button type="button" onClick={clearListHandler}>Clear List</button>
            </form>
            {noteList?.map((note)=>{
                const date = new Date(note.date);
                const d = date.getDate();
                const month = date.getMonth()+1;
                const year = date.getFullYear();
                return (<NotesItem key={note.id} 
                    name={note.noteName}
                description={note.noteDescription}
                date={`${d}-${month}-${year}`}
                />)
            })}
        </div>  

        
        </>
    )
}

export default NotesManager;
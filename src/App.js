import React, {useState} from 'react';
import BookMark from './compoents/BookMarkManager/BookMark';
import NotesManager from './compoents/NotesManager/NotesManager';

function App() {
  const [bookmark, setBookMark] = useState(false);
  const [noteManager, setNoteManager] = useState(false);
  const bookMarkHandler = (event) =>{
    setBookMark(true);
    setNoteManager(false);
  }
   const noteManagerHandler = (event) =>{
    setBookMark(false);
    setNoteManager(true);
  }
  return (
    <div className='main-container'>
      <button type="button" onClick={bookMarkHandler}> Add Bookmark</button>
      <button type="button" onClick={noteManagerHandler}> Add Note</button>
    {bookmark && <BookMark/>}
    {noteManager && <NotesManager/>}
    </div>
  );
}

export default App;

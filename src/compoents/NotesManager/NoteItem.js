import React from 'react';
import "./NoteItem.css";

const NoteItem = (props) => {

  return (
    <div className='item-container' key={props.id}>
      <h3>Name:{props.name}</h3>    
      <h3>description:{props.description}</h3>
      <h3>{props.date}</h3>
    </div>    
  );
};

export default NoteItem;
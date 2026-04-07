import React from 'react';
import "./BookMarkItem.css";

const BookMarkItem = (props) => {

  const visitHandler = () => {
    window.open(props.url, "_blank"); // opens in new tab
  };

  return (
    <div className='item-container' key={props.id}>
      <h3>{props.name}</h3>    
      <button onClick={visitHandler}>Visit</button>
    </div>    
  );
};

export default BookMarkItem;
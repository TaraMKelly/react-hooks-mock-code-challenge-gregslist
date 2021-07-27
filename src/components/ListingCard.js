import React, { useState } from "react";




function ListingCard({ item, removeItem }) {

  // console.log(item)

  const [ favButton, setButton ] = useState(true)


  function handleClick() {
    setButton(!favButton)
  }

  function handleDelete() {
     removeItem(item.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favButton ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

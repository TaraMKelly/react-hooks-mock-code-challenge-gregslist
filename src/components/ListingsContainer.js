import React, { useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchedItem}) {

  console.log(searchedItem)



  const [info, setInfo] = useState([]);
 
    const newList = info.filter(element => element.description.toLowerCase().includes(searchedItem.toLowerCase()))

    console.log(newList)

    function removeItem(id) {
      setInfo(info.filter(element => element.id !== id))
    }
    
      
    // setInfo(newList)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setInfo(data);
      });
  },[]);

      // let newInfo = 

  return (
    <main>
      <ul className="cards">
        {newList.map(item => {
          return (<ListingCard key={item.id} item={item} removeItem={removeItem} />)
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

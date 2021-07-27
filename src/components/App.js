import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {


  const [ itemSearch, setItemSearch ] = useState("")

  function handleSubmitEvent(userSearch) {
      setItemSearch(userSearch)
  }


  return (
    <div className="app">
      <Header handleSubmitEvent={handleSubmitEvent}/>
      <ListingsContainer searchedItem={itemSearch}/>
    </div>
  );
}

export default App;

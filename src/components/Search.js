import React, {useState} from "react";


function Search({ handleSubmitEvent }) {
  const [ userSearch, setUserSearch ] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitEvent(userSearch)
  }

  function handleSearch(e) {
    setUserSearch(e.target.value)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={userSearch}
        onChange={handleSearch}
      />
      <button onSubmit={handleSubmit} type="submit">🔍</button>
    </form>
  );
}

export default Search;

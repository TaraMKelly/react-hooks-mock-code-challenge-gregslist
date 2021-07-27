import React from "react";
import Search from "./Search";



function Header({ handleSubmitEvent }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmitEvent={handleSubmitEvent}/>
    </header>
  );
}

export default Header;

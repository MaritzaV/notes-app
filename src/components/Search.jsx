import React, { useState } from "react";

const Search = ({notesList, setNotesList}) => {
  const [search, setSearch] = useState('');
  
  const searchNote = (e) => {
    //create state with default
    setSearch(e.target.value);
    //filter 
    let result = notesList.filter(note => {
      return note.title.toLowerCase().includes(search.toLowerCase());
    });
    if(search.length <= 1 || result <= 0) {
      result = JSON.parse(localStorage.getItem('notes'));
    }
    setNotesList(result);
  }
  return (
      <div className="search">
        <h3 className="title">Search</h3>
        <form className="searchField">
          <input 
            type="text" 
            id="search_field" 
            name="search"
            value={search}
            placeholder="Type.."
            autoComplete="off"
            onChange={searchNote}/>
          <button id="search" className="searchBtn">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
  );
};

export default Search;

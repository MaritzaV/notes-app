import React, { useState } from "react";
import { SaveInStorage } from "../helpers/SaveInStorage";

const Add = ({setNotesList}) => {

  const createNewNote = e => {
    e.preventDefault();
    // get values from form
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // create object note to save
    let note = {
      id: new Date().getTime(),
      title,
      description,
    };

    //update main state
    setNotesList !== null ? setNotesList(elements => {
        return [...elements, note];
      })
      :
      setNotesList(note);
    //save in local storage
    SaveInStorage('notes', note);
  };

  return (
    <div className="add">
      <h3 className="title">Create Note</h3>
      
      <form onSubmit={createNewNote} className="add_form">
        <input type="text" id="title" name="title" placeholder="Title" />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
        ></textarea>
        <input type="submit" id="save" value="save" />
      </form>
    </div>
  );
};

export default Add;

import React, { useState } from 'react'

const Edit = ({note, getNotes, setEdit, setNotesList}) => {
    const [title, setTitle] = useState([note.title]);
    const [description, setDescription] = useState([note.description]);

    // const date = useCreateDate();

    const handleSave = (e, id) => {
        e.preventDefault();
        //get target
        let target = e.target;
        //find the object to be edited
        let allNotes = getNotes();
        let index = allNotes.findIndex( note => note.id === id);
        //create new object with the same index, and updated title and or description
        let updated_note = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        //update element with the index
        allNotes[index] = updated_note;
        //save in localStorage
        localStorage.setItem('notes', JSON.stringify(allNotes));
        // change states
        setNotesList(allNotes);
        setEdit(0);
    }

  return (
        <form onSubmit={(e) => handleSave(e, note.id)} className='edit_form'>
          <input 
            className="title" 
            type="text" 
            id="title" 
            name="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <textarea
            id="description"
            name="description"
            value={description}
            className="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" id="save" value="save" />
        </form>
  )
}

export default Edit
import React, { useEffect, useState } from 'react'
import Edit from './Edit';


const NotesList = ({notesList, setNotesList}) => {
    const [edit, setEdit] = useState(0);
    // [notesList, setNotesList] = useState([]);
    
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        let allNotes = JSON.parse(localStorage.getItem("notes"));
        setNotesList(allNotes);
        return allNotes;
    }
    const handleDelete = (id) => {
        //get current notes
        const currentNotes = getNotes();
        //filter notes to delete selected note
        let newNotes = currentNotes.filter(note => note.id !== parseInt(id));
        //update the main notes state
        setNotesList(newNotes);
        //update notes in localstorage
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }

  return (
    <>
    {Array.isArray(notesList)  ? notesList.map((note) => {
        return(
            <article key={note.id} className="card-item">
                <div className='card-buttons'>
                    <button className="actionBtn" onClick={() => setEdit(note.id)}>
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="actionBtn" onClick={() => handleDelete(note.id)}>
                        <span className="material-symbols-outlined">delete_forever</span>
                    </button>
                </div>
                <div className='card-content'>
                    <h3 className="title">{note.title}</h3>
                    <p className="description">{note.description}</p>
                </div>
            {edit == note.id && (
                <Edit 
                    note={note} 
                    getNotes={getNotes}
                    setEdit={setEdit}
                    setNotesList={setNotesList}
                />
            )}
            </article>
            );
    }) : <div>You have no notes to show</div>}
    </>
  )
}

export default NotesList
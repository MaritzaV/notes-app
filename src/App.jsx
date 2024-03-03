import './App.css'
import { useState } from "react";
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';
import Add from './components/Add';
import NotesList from './components/NotesList';


function App() {
  const [notesList, setNotesList] = useState([]);
  
  return (
    <div className="layout">
        <Navbar />
        <section id="content" className="content">
          <NotesList notesList={notesList} setNotesList={setNotesList} />
        </section>
        <aside className="lateral">
            <Search notesList={notesList} setNotesList={setNotesList} />
            <Add setNotesList={setNotesList} />
        </aside>
        <Footer />
    </div>
  )
}

export default App

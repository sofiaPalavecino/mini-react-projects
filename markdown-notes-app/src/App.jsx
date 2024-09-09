import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Editor from './components/Editor/Editor'
import { data } from './data'
import Split from "react-split"
import {nanoid} from "nanoid"
import './App.scss'

function App() {

    const [notes, setNotes] = useState( () => JSON.parse(localStorage.getItem("notes")) || [])

    useEffect( () => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0]?.id) || ""
    )

    const currentNote = notes.find( note => {return note.id === currentNoteId}) || notes[0]

    function createNewNote(){
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes( prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text){
        setNotes( prevNotes => {
            const newNotes = []
            for (let i = 0; i < prevNotes.length; i++) {
                let note = prevNotes[i];
                if (note.id == currentNoteId) {
                    note.body = text
                    newNotes.unshift(note)
                } else {
                    newNotes.push(note)
                }
            }
            return newNotes
        })
    }

    function deleteNote(event, noteId){
        event.stopPropagation()
        setNotes( prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    function deleteAll(){
        setNotes([])
    }

    return (
        <main>
            {
                notes.length > 0
                ?
                <Split 
                    sizes={[30, 70]} 
                    direction="horizontal" 
                    className="split"
                >
                    <Sidebar
                        notes={notes}
                        currentNote={currentNote}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                        deleteAll={deleteAll}
                    />
                    {
                        currentNoteId && 
                        notes.length > 0 &&
                        <Editor 
                            currentNote={currentNote} 
                            updateNote={updateNote} 
                        />
                    }
                </Split> 
                :
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button
                        className='btn btn-outline-secondary'
                        onClick={createNewNote}
                    >
                        Create one now
                    </button>
                </div> 
            }
        </main>
    )
}

export default App

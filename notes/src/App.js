import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"
import './styles.css'

export default function App() {
    //lazy instalization
    const [notes, setNotes] = React.useState( () => JSON.parse(localStorage.getItem("notes")) || [])
    
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    React.useEffect (() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
    //     setNotes(oldNotes => {
    //         const newArr = oldNotes.map(oldNote => {
    //         return oldNote.id === currentNoteId
    //             ? { ...oldNote, body: text }
    //             : oldNote
    //     })
    //     return newArr
    // })
//     setNotes(oldNotes => {
//         const newArr = oldNotes.reduce((acc, currNote) => {
//         currNote.id === currentNoteId
//             ? acc.push({ ...currNote, body: text })
//             : acc.push(currNote)
//         return acc
//     }, [])
//     return newArr
// })
        setNotes(oldNotes => oldNotes.reduce((acc, curr_val) => {
            if (curr_val.id !== currentNoteId) { acc.push(curr_val) }
            else {acc.unshift({ ...curr_val, body: text })}
            return acc
        }, []))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    function deletNote(event, noteId){
        //when th trash icon clocked dont propoget to the parent and now its not goes to the note
        event.stopPropagation()
        setNotes(prevNotes =>
         prevNotes.filter(note => note.id !== noteId))
        
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
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    deleteNote = {deletNote}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}

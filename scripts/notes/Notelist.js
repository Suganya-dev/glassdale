import {getNotes,useNotes} from "./Notedataprovider.js"
import {notecard} from "./Note.js"
//get notes from api
// use the notes array
//  iterate the notes  -> make html representation
// render to the dom
const notescontainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
export const Notelist = () => {
    getNotes()
    .then( () =>{
   const allnotes = useNotes()
   render (allnotes)
    })
}
eventHub.addEventListener("noteStateChangedEvent",() => Notelist())


const render = (NotesArray) =>{

    let NotesHTML = ""
    //   criminals.forEach()
    for(const notes of NotesArray){
        NotesHTML += notecard(notes)

        notescontainer.innerHTML = `
                ${NotesHTML} `
}
}





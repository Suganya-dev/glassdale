import {getNotes,useNotes} from "./Notedataprovider.js"
import {notecard} from "./Note.js"
import { getCriminals, useCriminals } from "../criminal/criminaldataprovider.js"
// import {useCriminals} from "./criminal/criminaldataprovider.js"

// use the notes array
//  iterate the notes  -> make html representation
// render to the dom
const notescontainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
// //get notes from api

export const Notelist = () => {
    console.log("Notelist")
    getNotes()
    // .then(() => getCriminals())
    .then(getCriminals)
    .then( () =>{
   const allnotes = useNotes()
   const allcriminals = useCriminals()
   render (allnotes,allcriminals)
    })
}
// responding to the CustomEvent

eventHub.addEventListener("noteStateChanged",() => Notelist())


const render = (NotesArray,criminalsArray) =>{

    let NotesHTML = ""
    //   criminals.forEach()
    for(const notes of NotesArray){
        const relatedCriminal = criminalsArray.find (criminal => criminal.id === notes.criminalId)
        NotesHTML += notecard(notes,relatedCriminal)
    }
        notescontainer.innerHTML = `
        <h3>Case Notes</h3>
                ${NotesHTML} `
}







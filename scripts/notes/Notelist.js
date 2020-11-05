import {getNotes,useNotes} from "./Notedataprovider.js"
import {notecard} from "./Note.js"
import { getCriminals, useCriminals } from "../criminal/criminaldataprovider.js"
// import {useCriminals} from "./criminal/criminaldataprovider.js"
//get notes from api
// use the notes array
//  iterate the notes  -> make html representation
// render to the dom
const notescontainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

export const Notelist = () => {
    getNotes()
    // .then(() => getCriminals())
    .then(getCriminals)
    .then( () =>{
   const allnotes = useNotes()
   const allcriminals = useCriminals()
   render (allnotes,allcriminals)
    })
}
eventHub.addEventListener("noteStateChangedEvent",() => Notelist())


const render = (NotesArray,criminalsArray) =>{

    let NotesHTML = ""
    //   criminals.forEach()
    for(const notes of NotesArray){
        const relatedCriminal = criminalsArray.find (criminal => criminal.id === notes.criminalId)
        NotesHTML += notecard(notes,relatedCriminal)
    }
        notescontainer.innerHTML = `
                ${NotesHTML} `
}







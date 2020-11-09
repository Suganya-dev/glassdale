import { saveNote } from "./Notedataprovider.js";
import {getCriminals,useCriminals}from "../criminal/criminaldataprovider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub =  document.querySelector(".container")

// get the criminalsList from getcriminals,usecriminals
export const NoteForm =() =>{
    getCriminals().then(() =>{
        const criminals = useCriminals()
        render(criminals) 
    })
}
// rendering and put into DOM
const render =(criminals) =>{
    contentTarget.innerHTML = `
    <input id="note--date" type="date"/>
    <input id ="note--author" type="text" placeholder="Your name"/>
    <select class="criminalSelect" id="note--criminalId">
    <option value="0">Select a suspect</option>
     ${criminals.map(criminalObject =>{
         return `<option value="${ criminalObject.id }">${ criminalObject.name }</option>`
     }).join("")
 }
 </select>
    <input id="note--text" type="text" placeholder="Note text"/>
        <button id="saveNote">Save Note</button>`
}

// creating a web browseer event
eventHub.addEventListener ("click", clickevent => {
if(clickevent.target.id === "saveNote"){
    //grab input values
const dateOfInterview = document.querySelector("#note--date").value
const author = document.querySelector("#note--author" ).value
const criminalId =parseInt(document.querySelector("#note--criminalId" ).value)
const note = document.querySelector("#note--text" ).value
const timestamp = Date.now()

//make a note object
const newNote = {
    dateOfInterview,
    author,
    criminalId,
    note,
    timestamp
}
// console.log(newNote)
//send the object to database
  saveNote(newNote)
}
})



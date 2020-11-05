import { saveNote } from "./Notedataprovider.js";
import {getCriminals,useCriminals}from "../criminal/criminaldataprovider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub =  document.querySelector(".container")


export const NoteForm = () => {
    getCriminals()
    .then(render)
}

const criminalSelect = () => {
        const criminals = useCriminals()
        return ` 
        <select class="criminalSelect" id="note--criminalId">
           <option value="0">Select a suspect</option>
            ${criminals.map(criminalObject =>{
                return `<option value="${ criminalObject.id }">${ criminalObject.name }</option>`
            }).join("")
        }
        </select>
       `
}

const render =() =>{
    contentTarget.innerHTML = `
    <input id="note--date" type="date"/>
    <input id ="note--author" type="text" placeholder="Your name"/>
    ${criminalSelect()}
    <input id="note--text" type="text" placeholder="Note text"/>
        <button id="saveNote">Save Note</button>`
}

eventHub.addEventListener ("click", clickevent => {
if(clickevent.target.id === "saveNote"){
    //grab input values
const dateOfInterview = document.querySelector("#note--date").value
const author = document.querySelector("#note--author" ).value
const criminalId = document.querySelector("#note--criminalId" ).value
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


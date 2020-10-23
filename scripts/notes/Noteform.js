import { saveNote } from "./Notedataprovider.js";



const contentTarget = document.querySelector(".noteFormContainer")
const eventHub =  document.querySelector(".container")
const render = () => {
    contentTarget.innerHTML = `
        <input id= "notes--dateOfInterview" type = "date"/>
        <input id= "notes--author" type="text placeholder="Your name here" />
        <input id= "notes--suspect" type="text"  placeholder="Your SuspectName here" />
        <textarea id ="notes--note"  placeholder="Your Note here"></textarea>

        <button id="saveNote">SaveNote</button>
    `
};

eventHub.addEventListener ("click", clickevent => {
if(clickevent.target.id === "SaveNote"){
    //grab input values
const dateOfInterview = document.querySelector("notes--dateOfInterview" ).value
const author = document.querySelector("notes--author" ).value
const suspect = document.querySelector("notes--suspect" ).value
const note = document.querySelector("notes--note" ).value
const timestamp = Date.now()

//make a note object

const newNote = {
    dateOfInterview,
    author,
    suspect,
    note,
    Timestamp
}
//send the object to database
  saveNote(newNote)
}

})
export const NoteForm = () => {
    render()
}
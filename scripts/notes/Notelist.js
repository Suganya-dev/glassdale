import {getNotes,useNotes} from "./Notedataprovider.js"
import {notecard} from "./Note.js"
// import {useCriminals} from "./criminal/criminaldataprovider.js"
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

const render1 = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}




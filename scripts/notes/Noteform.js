const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input id= "notes--dateOfInterview" type = "date"/>
        <input id= "notes--author" type="text placeholder="Your name here" />
        <input id= "notes--suspect" type="text"  placeholder="Your SuspectName here" />
        <textarea id ="notes--note"  placeholder="Your Note here"></textarea>

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}
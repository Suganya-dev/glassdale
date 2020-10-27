const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__witnesses")

export const witnessButton =()=>{
    contentTarget.innerHTML +=
    `
    <button id="display-witnesses-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click",clickEvent => {
if(clickEvent.target.id === "display-witnesses-button"){
    // console.log("wit button was clicked")
const witnessEvent = new CustomEvent("witnessClicked")

eventHub.dispatchEvent(witnessEvent)
}
})
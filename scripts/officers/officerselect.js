
import{useOfficers,getOfficers} from "./OfficerProvider.js"
const OfficerHTMLcontainer = document.querySelector(".filter__officer")
const eventHub = document.querySelector(".container")

export const officerselect = () =>{
    getOfficers()
    .then (() => {
        const OfficersArray = useOfficers()
        console.log(OfficersArray)
        render(OfficersArray)
    })
}
 const render = (officer) => {
    OfficerHTMLcontainer.innerHTML = 
    ` <select class="dropdown" id="officerSelect">
    <option value="0">Please select a officer...</option>
    ${officer.map( 
        officerObj => {
            return `<option value ="${officerObj.name}"> ${officerObj.name}</option>`
     }) .join(" ")} 
    </select>
 `
 }
 
eventHub.addEventListener("change", changeEvent =>{
   if(changeEvent.target.id === "officerSelect"){
    //    const selectedOfficer = changeEvent.target.value

    const officersEvent = new CustomEvent("officerSelect",{
        detail:{
            OfficerThatWasChosen : changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(officersEvent)
   }
})


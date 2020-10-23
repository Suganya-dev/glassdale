// import{useOfficers,getOfficers} from"./OfficerProvider.js"

// const officersfiltercontainer =document.querySelector(".filter__officer")
// const eventHub = document.querySelector(".container") 

// export const officerselect = () => {
//     console.log( officerselect ) 

// getOfficers()
// .then(() => {
//     const officersArray = useOfficers()
//     console.log(officersArray)

//      render(officersArray)
// })
// }

// const render = (Officers) => {
//     // let officersArrayHTML = ""
//     officersfiltercontainer.innerHTML = ` 
//      <select class="dropdown" id="officerSelect">
//     <option value="0">Please select a officer...</option>
//     ${Officers.map(
//         officerObj => {

// return `<option value ="${officerObj.name}"> ${officerObj.name} </option>`
// })
//  .join("")
//         }    
// </select> 
// `
// }

// eventHub.addEventListener("change", (changeEvent) =>{
//     if(changeEvent.target.id === "officerSelect"){
//     console.log(officerSelect, "change event happened")
    
//         const officersEvent = new CustomEvent ("officerSelect", {
//             // console.log(build custom event)
//             detail:{
//                 officerName: changeEvent.target.value
//             }
//         })
//   console.log("OfficerSelect: Dispatch officerSelected event to event hub")
//     eventHub.dispatchEvent(officersEvent)
//     }
// })


import{useOfficers,getOfficers} from "./offcerprovider.js"
const OfficerHTMLcontainer = document.querySelector(".filter__officer")
const eventHub = document.querySelector(".container")

export const Officerslist = () =>{
    getOfficers()
    .then (() => {
        const OfficersArray = useOfficers()
        console.log(OfficersArray)
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
            OfficerThatWasChosen = changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(officersEvent)
   }
})


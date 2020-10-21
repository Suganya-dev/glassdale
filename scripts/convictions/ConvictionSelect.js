import {getConvictions, useConvictions} from "./ConvictionProvider.js"
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")
// console.log(eventHub);
export const ConvictionSelect = () => {
    getConvictions()
    .then(()  => { 
    const convictions = useConvictions()
    render(convictions)
})
}
const render = convictionsCollection => {

contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                convictionObj => {

        return `<option value ="${convictionObj.id}"> ${convictionObj.name} </option>`})
        //  .join("")
                }    
        </select> `
                }


        // console.log(changeEvent.target.value)})
eventHub.addEventListener("change", changeEvent =>{
 if(changeEvent.target.id === "crimeSelect"){
 const customEvent = new CustomEvent ("crimeSelected", {
  detail:{
        crimeThatWasChosen: changeEvent.target.value 
  }
})

  eventHub.dispatchEvent(customEvent)
}
})

  
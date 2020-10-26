//Get the alibis related to a single criminal & show it in a list
import {useCriminals} from "./criminaldataprovider.js"
const eventHub = document.querySelector(".container")

export const createAlibiEventListener = () => {  
eventHub.addEventListener("alibibuttonClicked", eventObj =>{
    const listCriminal = useCriminals()
    const numCriminal = listCriminal.find((criminalObj) =>{
        // console.log("criminalobject" , criminalObj)
        // console.log("criminal Id" , parseInt(eventObj.detail.criminal))
        return criminalObj.id === parseInt(eventObj.detail.criminal)
    })
    console.log(numCriminal)
    render(numCriminal)
})
}
//  const AlibiList = (crminalObj) => {
//     //  console.log(AlibiList)
//      render(crminalObj)
//  }

 const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    
    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}
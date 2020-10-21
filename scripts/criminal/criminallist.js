import { getCriminals, useCriminals } from './criminaldataprovider.js'
import {criminalcard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
 console.log(eventHub)
export const CriminalList = () => {
    getCriminals().then( () => { 
        const criminals = useCriminals();
    
    
})
}

eventHub.addEventListener("crimeSelected", event => {
        console.log("crimeSelected",event.detail.crimeThatWasChosen)
        if(event.detail.crimeThatWasChosen !== 0) { 
        const criminals = useCriminals()
        console.log(criminals)
        const convictions = useConvictions()
         console.log("convictions",convictions)
        const convictionThatWasChosen = convictions.find(convictionObj => {
        return convictionObj.id === event.detail.crimeThatWasChosen
        })
        console.log("convictionThatWasChosen",convictionThatWasChosen)
   
        const filteredArray = criminals.filter(criminalObj =>{
            return criminalObj.name === convictionThatWasChosen.name 
        })
      console.log("filtered",filteredArray)
      render (filteredArray)
    }
})
  
      const render = () => { 
      let criminalHTML = ""
    for(const numbers of filteredArray){
    criminalHTML += criminalcard(numbers)

    contentElement.innerHTML =  
    `<h3>  Glassdale Criminals   </h3>
    <section  class="criminals" > 
    ${criminalHTML}
    </section>`

        }
    }


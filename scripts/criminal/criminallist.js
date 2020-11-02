import { getCriminals, useCriminals } from './criminaldataprovider.js'
import {criminalcard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
 console.log(eventHub)
export const CriminalList = () => {
    getCriminals().then( () => { 
        const criminals = useCriminals();
         render(criminals);
    
})
}

eventHub.addEventListener("crimeSelected", event => {
        // console.log("crimeSelected",event.detail.crimeThatWasChosen)

        if(event.detail.crimeThatWasChosen !== 0) { 
        const criminals = useCriminals()
        // console.log(criminals)

        const convictions = useConvictions()
        //  console.log("convictions",convictions)

        const convictionThatWasChosen = convictions.find(convictionObj => {
            // debugger
        return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })
        // console.log("convictionThatWasChosen",convictionThatWasChosen)
   
        const filteredArray = criminals.filter(criminalObj =>{
            return criminalObj.conviction === convictionThatWasChosen.name
        })
    //   console.log("filtered",filteredArray)
      render (filteredArray)
      console.log("filtered list of criminals")
    }else{
        CriminalList()
    }
})
  eventHub.addEventListener("officerSelect", officerselectedEventObj =>{
    console.log(officerselectedEventObj, "customevent heard on the eventhub") 

     const selectedOfficerName = officerselectedEventObj.detail.OfficerThatWasChosen
     const criminals = useCriminals()
     console.log(criminals)

const filteredArrayCriminals = criminals.filter( 
     (criminalObj =>{
         if (criminalObj.arrestingOfficer === selectedOfficerName) { 
             return true
            } 
            return false
         }
     )) 
    //  console.log(filteredArrayOfficers ,"criminals list filtered")

     render(filteredArrayCriminals)
  })


      const render = (criminals) => { 
      let criminalHTML = ""
    //   criminals.forEach()
    for(const numbers of criminals){
    criminalHTML += criminalcard(numbers)

    contentElement.innerHTML =  
    `<h3>  Glassdale Criminals   </h3>
    <section  class="criminals" > 
    ${criminalHTML}
    </section>`

        }
    }


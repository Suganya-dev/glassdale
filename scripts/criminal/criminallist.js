import { getCriminals, useCriminals } from './criminaldataprovider.js'
import {criminalcard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import {getFacilities,useFacilities} from "../facility/FacilityProvider.js"
import {getCriminalFacilities,useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
 console.log(eventHub)

// export const CriminalList = () => {
//     getCriminals().then( () => { 
//         const criminals = useCriminals();
//          render(criminals);
    
// })
// }

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // debugger
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
     // Step 2 - Filter all relationships to get only ones for this criminal
    const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

    // Step 3 - Convert the relationships to facilities with map()
     const facilities = facilityRelationshipsForThisCriminal.map(cf => {
     const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
        return matchingFacilityObject
            })

    // Must pass the matching facilities to the Criminal component
    return criminalcard(criminalObject, facilities)
        }
    ).join("")
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


    //   const render = (criminals) => { 
    //   let criminalHTML = ""
    // //   criminals.forEach()
    // for(const numbers of criminals){
    // criminalHTML += criminalcard(numbers)

    // contentElement.innerHTML =  
    // `<h3>  Glassdale Criminals   </h3>
    // <section  class="criminals" > 
    // ${criminalHTML}
    // </section>`

    //     }
    // }

   
import { getCriminals, useCriminals } from './criminaldataprovider.js'
import {criminalcard} from "./criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import {getFacilities,useFacilities} from "../facility/FacilityProvider.js"
import {getCriminalFacilities,useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"


const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
 console.log(eventHub)

 let facilities =[]
 let criminals=[]
 let crimFac = []

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getCriminals()
    .then(getFacilities)
        .then(getCriminalFacilities)
        .then(() => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                 criminals = useCriminals()

                // Pass all three collections of data to render()
                render()
            }
        )}

const render = () => {
    // debugger
  // Step 1 - Iterate all criminals
   // contentTarget.innerHTML = criminals.map(
    //     (criminalObject) => {
     // Step 2 - Filter all relationships to get only ones for this criminal
     let criminalHTMLrepresentation = ""
     for(const criminal of criminals){
    const facilityRelationshipsForThisCriminal = crimFac.filter(cf => cf.criminalId === criminal.id)

    // Step 3 - Convert the relationships to facilities with map()
     const facilitiesArray = facilityRelationshipsForThisCriminal.map(cf => {
     const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
        return matchingFacilityObject
            })

    // Must pass the matching facilities to the Criminal component
    criminalHTMLrepresentation +=criminalcard(criminal,facilitiesArray)
    }
    criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
          ${criminalHTMLrepresentation}
        </section>
      `
}


    
// eventhandlers

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



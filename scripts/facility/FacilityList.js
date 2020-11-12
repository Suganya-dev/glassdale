import{facilityCard} from"../facility/Facility.js"
import { getCriminals, useCriminals } from '../criminal/criminaldataprovider.js'
import {getFacilities,useFacilities} from "../facility/FacilityProvider.js"
import {getCriminalFacilities,useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"

const facilityContainer = document.querySelector(".facilityContainer")
const eventHub=document.querySelector(".container")

let facilities =[]
 let criminals=[]
 let crimFac = []

export const FacilityList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
    .then(getCriminals())
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



eventHub.addEventListener("facilitiesButtonClicked", ()=>{
    FacilityList()
})
    const render = () => {
        facilityContainer.innerHTML = `
        <h3>Glassdale Facilities</h3>
         <section class="facilityList">
        ${facilities.map(facility =>{
        const criminalrelations =crimFac.filter(crim => crim.facilityId === facility.id)

         const criminalArray = criminalrelations.map(cfc=> {
            const matchingcriminalObj = criminals.find(criminal => criminal.id === cfc.criminalId)
            return matchingcriminalObj
         })
         return facilityCard(facility,criminalArray)
       }).join("")
     }
     </section>`
    }




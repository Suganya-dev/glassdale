import{useCriminalFacilities} from"../facility/CriminalFacilityProvider.js"
import{useCriminals} from"../criminal/criminaldataprovider.js"

export const facilityCard = (facilityObj) =>{
 return ` <div class="facility">
  <p>${facilityObj.facilityName}</p>
  <p>Security Level: ${facilityObj.securityLevel}</p>
  <p>Capacity: ${facilityObj.capacity}</p>
  <p>Criminals</p>
  ${useCriminalFacilities().map(fac =>{
      if(fac.facilityId === facilityObj.id){
        return `${useCriminals().find(crim => crim.id === fac.criminalId).name}`
        
      }
  }).join("")}
  </div>`
}
  

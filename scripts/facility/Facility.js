import{useCriminalFacilities} from"./FacilityProvider.js"
import{useCriminals} from"./criminaldataprovider.js"

export const facillityCard = (facilityObj) =>{
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
  

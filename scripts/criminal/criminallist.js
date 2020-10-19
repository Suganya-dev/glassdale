import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'
import {criminalcard} from "./criminal.js"
export const CriminalList = () => {
    getCriminals().then(( ) =>{
        const criminal1 = useCriminals()
        })
}
    
const contentElement = document.querySelector(".container")

let criminalHTML = ""
for (const numbers of criminal1 ){
    criminalHTML += criminalcard(numbers)
}
contentElement.innerHTML =  
`<h3>  glassdale criminals   </h3>
<section  class="criminals" > 
${criminalHTML}
</section>`


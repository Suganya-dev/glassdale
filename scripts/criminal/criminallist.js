import { getCriminals, useCriminals } from './criminaldataprovider.js'
import {criminalcard} from "./criminal.js"

const contentElement = document.querySelector(".criminalsContainer")
export const CriminalList = () => {
    getCriminals().then( () => { 
        const criminals = useCriminals();
    let criminalHTML = ""
for(const numbers of criminals){
    criminalHTML += criminalcard(numbers)

    contentElement.innerHTML =  
`<h3>  Glassdale Criminals   </h3>
<section  class="criminals" > 
${criminalHTML}
</section>`

}
    
})
}



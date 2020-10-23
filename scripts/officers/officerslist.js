import {useOfficers,getOfficers} from "./OfficerProvider.js"
import {officer} from "./officers.js"
const ContentElement = document.querySelector(".officersContainer")
export const Officerlist = () => { 
getOfficers() .then( () => {
const officers = useOfficers();
let OfficersHTML = ""
for(const numbers of  officers){
    OfficersHTML += officer(numbers);

    ContentElement.innerHTML = 
    `
    <h3>Officer's List</h3>
    <div class=filters>
    ${OfficersHTML}
    </div>
    `
    } })
}

    

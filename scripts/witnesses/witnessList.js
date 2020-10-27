const eventHub = document.querySelector(".container")
import {useWitnessstatements,useWitness} from "./witnessdataprovider.js"
import {witnessCard} from"./witness.js"
const contentTarget = document.querySelector(".caseDataContainer")

export const witnesssesList = () =>{
    useWitness()
    .then(() => {
    const witnessinfo = useWitnessstatements()
    // console.log(witnessinfo)
    render(witnessinfo)
    })
}
eventHub.addEventListener("witnessClicked",()=> {
//    console.log(" i love coding")
witnesssesList()
})


const render = (witnessstatementarray) => {
    let witnessHTMLrepresentation =""
    for(const witness of witnessstatementarray ){
        witnessHTMLrepresentation +=  witnessCard(witness)
    
    contentTarget.innerHTML +=
    `
    <h3>Glassdale Witnesses</h3>
    <section class="witnessesList">
      ${witnessHTMLrepresentation}
    </section>
    `
}
}
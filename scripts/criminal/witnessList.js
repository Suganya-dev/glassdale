import {useWitness} from "./witnessDataProvider.js"
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessbuttonClicked",eventObj => {
    const witnessList = useWitness()
})
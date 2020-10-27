const eventHub = document.querySelector(".container")

let witness =[];
export const useWitness = () => {
return fetch( "https://criminals.glassdale.us/witnesses")
.then(response => response.json())
.then (
    parsedwitness => {
    // console.log(parsedwitness)
         witness = parsedwitness;
    })
}

let witnesses =[]
export const useWitness = ()=>{
    return fetch ("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then (parsedWitness => {
        console.log(parsedWitness)
//         witnesses = parsedWitness
    }
}
let witnesses =[]

export const useWitnessstatements = () => {
  return witnesses.slice()  
}

export const useWitness = ()=>{
    return fetch ("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then (parsedWitness => {
        console.log(parsedWitness)
        witnesses = parsedWitness
    })
}
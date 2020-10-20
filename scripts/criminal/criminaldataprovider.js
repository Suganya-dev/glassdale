let criminals= []
export const useCriminals = () => criminals.slice()
export const getCriminals = () => {
 return fetch("https://criminals.glassdale.us/criminals")
       .then(response => response.json())
       .then(
           parsedcriminals => {
            //    console.table(parsedcriminals)
               criminals = parsedcriminals

           })
    }


    // export const getCriminals =() => criminals.slice();
    // export const useCriminals = () => {
    // return fetch("")
    // .then(response => response.json())
    // .then(
    //     parsedcriminals => {
    //         criminals= parsedcriminals
    //     }
    // )
    // }
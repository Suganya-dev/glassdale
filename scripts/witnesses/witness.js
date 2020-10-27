export const witnessCard =(witnessObj) =>{
    return `
     <div clas="witness">
     <h5> ${witnessObj.name}</h5>
     <p> ${witnessObj.statements}</p>
     </div>
     `
}
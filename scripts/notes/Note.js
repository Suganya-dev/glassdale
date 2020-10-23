export const notecard=(noteObj)=>{
    return `
    <section class="notes" >
    <h2>Author: ${noteObj.author}</h2>
    <p> Suspect: ${noteObj.suspect} </p>
    <p>Note: ${noteObj.note}</p>
    <p> dateOfInterview: ${noteObj.dateOfInterview} </p>
   <p> timestamp: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
   </section>
    `
}
    

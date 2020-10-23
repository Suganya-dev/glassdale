export const criminalcard =(criminalObj) => {
    return `
    <section class="criminals" >
   
    <h2> Name: ${criminalObj.name} </h2>
    <p class= "criminals__id"> id : ${criminalObj.id} </p>
    <p class= "criminals__age"> Age: ${criminalObj.age}</p>
    <p class= "criminals__crime">Crime: ${criminalObj.conviction} </p>
    <p class= "criminals__start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class= "criminals__end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
   
    </section>
    `
}


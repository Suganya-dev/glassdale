export const criminalcard =(criminalObj) => {
    return `
    <section class="criminals" id="criminal--${criminalObj.id}" >
    <h2 class= "criminals__name"> Name: ${criminalObj.name}</h2>
    <div class="criminals__properties">
    <p Age: ${criminalObj.age}</p>
    <p Crime: ${criminalObj.crime}</p>
    <p Start Term: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p End Term:${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    </section>
    `
}
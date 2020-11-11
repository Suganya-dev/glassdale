const eventHub = document.querySelector(".container")

export const criminalcard =(criminalObj,facilities) => {
    return `
    <section class="criminals" id="criminal-${criminalObj.id}" >
    <h3>${criminalObj.name}</h23>
    <p class= "criminals__id"> id : ${criminalObj.id} </p>
    <p class= "criminals__age"> Age: ${criminalObj.age}</p>
    <p>Arrested by ${criminalObj.arrestingOfficer}</p>
    <p class= "criminals__crime">Convicted for ${criminalObj.conviction} </p>
    <p class= "criminals__start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class= "criminals__end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    <div>
    <h2>Facilities</h2>
    <ul>
        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
    </ul>
</div>
    <button id="associates--${criminalObj.id}">Associate Alibis</button>
  
    </section>
    `
}


eventHub.addEventListener("click",clickEvent =>{
const[prefix, criminalId] = clickEvent.target.id.split("--")
// console.log(prefix, criminalId)

if( clickEvent.target.id.startsWith("associates--")){
    const myCustomEvent = new CustomEvent("alibibuttonClicked",{
        detail:{
            criminal:criminalId
        }
    })
        eventHub.dispatchEvent(myCustomEvent)

}
})


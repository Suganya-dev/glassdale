const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".filters")

export const FacilityButton = () =>{
    contentTarget.insertAdjacentHTML("beforeend",`<button id="listFacilities">List Facilities</button>`);
}

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "listFacilities"){
        const facilityButton = new CustomEvent("facilitiesButtonClicked", {
            detail:{
                buttonthatwasclicked: clickEvent.target.value
            }
        })
        // console.log("clickevent","click")
        eventHub.dispatchEvent(facilityButton)
    }
})
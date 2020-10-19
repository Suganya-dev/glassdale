export const officer = (officeObj) => {
    return `
    <div class= "filter">
   <p class="filter__Id"> Id:${officeObj.id} </p>
    <p  class="filter__name"> Name: ${officeObj.name}</p>
    </div>
    `
}
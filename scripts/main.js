import {CriminalList} from "./criminal/criminallist.js"
import {criminalcard} from "./criminal/criminal.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {Officerlist} from "./officers/officerslist.js"
import {officerselect} from "./officers/officerselect.js"
import {NoteForm} from "./notes/Noteform.js"
import {Notelist} from "./notes/Notelist.js"
import {createAlibiEventListener} from "./criminal/AlibiList.js"
import {useWitnessstatements} from "./witnesses/witnessdataprovider.js"
import {witnessButton} from "./witnesses/witnesstatbutton.js"
import {witnesssesList} from "./witnesses/witnessList.js"
import {getFacilities,useFacilities} from "./facility/FacilityProvider.js"
import {getCriminalFacilities,useCriminalFacilities} from "./facility/CriminalFacilityProvider.js"
import{FacilityButton} from "./facility/DisplayFacilitiesButton.js"
import {FacilityList} from"./facility/FacilityList.js"
FacilityList();
useFacilities();
getFacilities();

getCriminalFacilities();
useCriminalFacilities();

FacilityButton();

CriminalList();
// criminalcard();
ConvictionSelect();
Officerlist();
officerselect();
NoteForm();
Notelist();
createAlibiEventListener();
useWitnessstatements();
witnessButton();
witnesssesList();





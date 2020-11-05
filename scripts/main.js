import {CriminalList} from "./criminal/criminallist.js"
// import {getCriminals} from "./criminal/criminaldataprovider.js"
import {criminalcard} from "./criminal/criminal.js"
// import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
// import {getOfficers} from"./officers/OfficerProvider.js"
// import {useOfficers} from "./officers/OfficerProvider.js"
import {Officerlist} from "./officers/officerslist.js"
import {officerselect} from "./officers/officerselect.js"
import {NoteForm} from "./notes/Noteform.js"
import {Notelist} from "./notes/Notelist.js"
import {createAlibiEventListener} from "./criminal/AlibiList.js"
import {useWitnessstatements} from "./witnesses/witnessdataprovider.js"
import {witnessButton} from "./witnesses/witnesstatbutton.js"
import {witnesssesList} from "./witnesses/witnessList.js"

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





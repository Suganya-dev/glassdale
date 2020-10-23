import {CriminalList} from "./criminal/criminallist.js"
import {getCriminals} from "./criminal/criminaldataprovider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {getOfficers} from"./officers/OfficerProvider.js"
import {Officerlist} from "./officers/officerslist.js"
import {officerselect} from "./officers/officerselect.js"
import {criminalcard} from "./criminal/criminal.js"
import {NoteForm} from "./notes/Noteform.js"
getCriminals();
NoteForm();
CriminalList();
criminalcard();
getConvictions();
ConvictionSelect();
getOfficers();
Officerlist();
officerselect();







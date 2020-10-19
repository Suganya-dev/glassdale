import {CriminalList} from "./criminal/criminallist.js"
import {getCriminals} from "./criminal/criminaldataprovider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {getOfficers} from"./officers/OfficerProvider.js"
import {Officerlist} from "./officers/officerslist.js"
getCriminals();
CriminalList();
getConvictions();
ConvictionSelect();
getOfficers();
Officerlist();






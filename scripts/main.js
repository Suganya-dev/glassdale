import {CriminalList} from "./criminal/criminallist.js"
import {getCriminals} from "./criminal/criminaldataprovider.js"
import {getConvictions} from "./convictions/ConvictionProvider.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
getCriminals();
CriminalList();
getConvictions();
ConvictionSelect();







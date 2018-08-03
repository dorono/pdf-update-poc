import axios from 'axios';

const USER_KEY = 'bc98a294a08d16309434666fae9b2034';
const BASE_URL = 'https://api-2445581893456.production.gw.apicast.io';

/*
externalIds example: {
  pdfId: 'pdf id',
  pdfName: 'pdf name',
}


firstHashEntry example:
{
  pdfHash: 'if8ooA+32YZc4SQBvIDDY9tgTatPoq4IZ8Kr+We1t38LR2RuURmaVu9D4shbi4VvND87PUqq5/0vsNFEGIIEDA==',
  versionNumber: 6,
  date: new Date()
}

*/
function createChain (externalIds, firstHashEntry) {
  const dateVal = new Date();
  externalIds.pdfCreationDate = dateVal;
  firstHashEntry.versionDate = dateVal;

  axios.post(BASE_URL, {
    external_ids: Object.values(externalIds).map((val) => btoa(val)),
    content: btoa(`firstHashEntry: ${firstHashEntry}`),
  });
}

export default {
  createChain,
}
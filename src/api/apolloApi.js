import axios from 'axios';

const USER_KEY = 'bc98a294a08d16309434666fae9b2034';
const BASE_URL = '/v1';

/*
externalIds example: {
  pdfId: 'pdf id',
  pdfName: 'pdf name',
}


firstHashEntry example:
'if8ooA+32YZc4SQBvIDDY9tgTatPoq4IZ8Kr+We1t38LR2RuURmaVu9D4shbi4VvND87PUqq5/0vsNFEGIIEDA=='

*/

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'user-key': USER_KEY,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  crossDomain: true
});

function createChain (externalIds, firstHashEntry) {
  const dateVal = new Date();
  externalIds.pdfCreationDate = dateVal;
  // firstHashEntry.versionDate = dateVal;

  return instance.post('/chains', {
    external_ids: Object.values(externalIds).map((val) => btoa(val)),
    content: btoa(`firstHashEntry: ${firstHashEntry}`),
  });
}


function fetchChains () {
  return instance.get('/chains');
}

export default {
  createChain,
  fetchChains,
}
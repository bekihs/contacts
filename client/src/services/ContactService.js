import HttpService from './HttpService';

export default {
  save,
  query,
  getById,
  remove,
  getEmptyContact
};

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function query() {
  return HttpService.get('contact');
}
function getById(contactId) {
  return HttpService.get('contact/'+contactId);
}

function remove(contactId) {
  return HttpService.delete(`contact/${contactId}`);
}
async function save(contact) {
  const addedContact  = await HttpService.post(`contact`, contact);
  return  addedContact
}

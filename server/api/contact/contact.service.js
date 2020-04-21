
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    remove,
    findById,
    save
}

async function query(filterBy = {}) {
    const collection = await dbService.getCollection('contact')
    try {
        var contacts = await collection.find(filterBy).toArray()

        return contacts
    } catch (err) {
        console.log('ERROR: cannot find contacts')
        console.error(  err)
        throw err;
    }
}
async function findById(id) {
    const collection = await dbService.getCollection('contact')
    try {
        var contacts = await collection.findOne({"_id":ObjectId(id)}) 

        return contacts
    } catch (err) {
        console.error('ERROR: cannot find contacts')
        console.error(  err)
        throw err;
    }
}
async function remove(contactId) {
    const collection = await dbService.getCollection('contact')
    try {
        await collection.deleteOne({"_id":ObjectId(contactId)})
    } catch (err) {
        console.error(`ERROR: cannot remove contact ${contactId}` , err)
        throw err;
    }
}

async function save(contact) {
    const collection = await dbService.getCollection('contact')
    try {
        if (contact._id){ 
            contact._id = ObjectId(contact._id)
            await collection.updateOne({_id:contact._id} , 
                { $set: contact })
        }
        else{
            await collection.insertOne(contact);
        }
        return contact;
    } catch (err) {
        console.error(err)
        throw err;
    }
}
 

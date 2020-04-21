const contactService = require('./contact.service')
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', async (req, res) => {
    try {
        const contacts = await contactService.query()
        res.send(contacts)
    }
    catch (err) {
        res.sendStatus(500)
    }
})
router.get('/:id', async (req, res) => {
    try {
        console.log();
        const contacts = await contactService.findById(req.params.id)
        res.send(contacts)
    }
    catch (err) {
        res.sendStatus(500)
    }
})
router.post('/', async (req, res) => {
    try {
        var review = req.body;
        review = await contactService.save(review)
        res.send(review)
    }
    catch (err) {
        res.sendStatus(500)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await contactService.remove(req.params.id)
        res.end()
    }
    catch (err) {
        res.sendStatus(500)
    }
})

module.exports = router
const { Router } = require('express')
const router = Router()
const Service = require('./service')
router.get('/casino/:url', async (req, res) => {
	const service = new Service()
	const response = await service.getPublicPostByUrl(req.params.url)
	if (response) res.status(200).json(response)
	else res.status(404).json({ status: 'error' })
})
module.exports = router

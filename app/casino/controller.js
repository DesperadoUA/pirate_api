const { Router } = require('express')
const router = Router()
const Service = require('./service')
router.get('/casino/:url', async (req, res) => {
	const service = new Service()
	const response = await service.getPublicPostByUrl(req.params.url)
	res.status(200).json(response)
})
module.exports = router

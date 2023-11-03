const Model = require('./models/index')
class Service {
	static async insert(data) {
		const result = await Model.insert(data)
		return { status: result }
	}
}
module.exports = Service

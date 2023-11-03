const Model = require('./models/index')
class Service {
	static async insertVisit(data) {
		const result = await Model.insertVisit(data)
		return { status: result }
	}
	static async insertAction(data) {
		const result = await Model.insertAction(data)
		return { status: result }
	}
}
module.exports = Service

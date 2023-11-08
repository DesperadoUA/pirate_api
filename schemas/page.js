const commonFields = require('./commonFields')
module.exports = {
	tableName: 'pages',
	orderBy: 'created_at',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'page'
		}
	]
}

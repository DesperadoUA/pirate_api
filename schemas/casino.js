const commonFields = require('./commonFields')
module.exports = {
	tableName: 'casinos',
	orderBy: 'rating',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'casino'
		},
		{
			type: 'string',
			params: ['slug'],
			fn: [],
			default: 'casino'
		}
	],
	metaFields: {
		tableName: 'casino_meta',
		fields: [
			{
				type: 'text',
				params: ['ref'],
				fn: [],
				default: null
			},
			{
				type: 'integer',
				params: ['rating'],
				fn: [],
				default: 0
			},
			{
				type: 'text',
				params: ['faq'],
				fn: [],
				default: null
			}
		]
	},
	category: {
		tableName: 'casino_category',
		fields: [
			...commonFields,
			{
				type: 'text',
				params: ['faq'],
				fn: [],
				default: null
			},
			{
				type: 'string',
				params: ['post_type'],
				fn: [],
				default: 'casino/category'
			},
			{
				type: 'string',
				params: ['slug'],
				fn: [],
				default: 'casinos'
			},
			{
				type: 'integer',
				params: ['parent_id'],
				fn: [],
				default: 0
			}
		]
	},
	relatives: {
		category: {
			tableName: 'casino_category_relative',
			mainSchema: 'casino',
			relativeSchema: 'casino'
		},
		casino_payment: {
			tableName: 'casino_payment_relative',
			mainSchema: 'casino',
			relativeSchema: 'payment',
			mainTable: 'casinos',
			relativeTable: 'payments'
		},
		casino_vendor: {
			tableName: 'casino_vendor_relative',
			mainSchema: 'casino',
			relativeSchema: 'vendor',
			mainTable: 'casinos',
			relativeTable: 'vendors'
		},
		casino_game: {
			tableName: 'casino_game_relative',
			mainSchema: 'casino',
			relativeSchema: 'game',
			mainTable: 'casinos',
			relativeTable: 'games'
		}
	}
}

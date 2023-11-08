const commonFields = require('./commonFields')
module.exports = {
	tableName: 'payments',
	orderBy: 'created_at',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'payment'
		},
		{
			type: 'string',
			params: ['slug'],
			fn: [],
			default: 'payment'
		}
	],
	metaFields: {
		tableName: 'payment_meta',
		fields: [
			{
				type: 'string',
				params: ['min_dep'],
				fn: [],
				default: null
			}
		]
	},
	category: {
		tableName: 'payment_category',
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
				default: 'payment/category'
			},
			{
				type: 'string',
				params: ['slug'],
				fn: [],
				default: 'payments'
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
			tableName: 'payment_category_relative',
			mainSchema: 'payment',
			relativeSchema: 'payment'
		}
	}
}

const commonFields = require('./commonFields')
module.exports = {
	tableName: 'vendors',
	orderBy: 'created_at',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'vendor'
		},
		{
			type: 'string',
			params: ['slug'],
			fn: [],
			default: 'vendor'
		}
	],
	metaFields: {
		tableName: 'vendor_meta',
		fields: [
			{
				type: 'string',
				params: ['country'],
				fn: [],
				default: null
			}
		]
	},
	category: {
		tableName: 'vendor_category',
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
				default: 'vendor/category'
			},
			{
				type: 'string',
				params: ['slug'],
				fn: [],
				default: 'vendors'
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
			tableName: 'vendor_category_relative',
			mainSchema: 'vendor',
			relativeSchema: 'vendor'
		}
	}
}

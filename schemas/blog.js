const commonFields = require('./commonFields')
module.exports = {
	tableName: 'blog',
	orderBy: 'created_at',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'blog'
		},
		{
			type: 'string',
			params: ['slug'],
			fn: [],
			default: 'blog'
		}
	],
	metaFields: {
		tableName: 'blog_meta',
		fields: [
			{
				type: 'string',
				params: ['author'],
				fn: [],
				default: null
			}
		]
	},
	category: {
		tableName: 'blog_category',
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
				default: 'blog/category'
			},
			{
				type: 'string',
				params: ['slug'],
				fn: [],
				default: 'blog/category'
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
			tableName: 'blog_category_relative',
			mainSchema: 'blog',
			relativeSchema: 'blog'
		}
	}
}

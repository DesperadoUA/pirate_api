const commonFields = require('./commonFields')
module.exports = {
	tableName: 'games',
	orderBy: 'rating',
	fields: [
		...commonFields,
		{
			type: 'string',
			params: ['post_type'],
			fn: [],
			default: 'game'
		},
		{
			type: 'string',
			params: ['slug'],
			fn: [],
			default: 'game'
		}
	],
	metaFields: {
		tableName: 'game_meta',
		fields: [
			{
				type: 'string',
				params: ['rtp'],
				fn: [],
				default: null
			},
			{
				type: 'text',
				params: ['iframe'],
				fn: [],
				default: null
			},
			{
				type: 'integer',
				params: ['rating'],
				fn: [],
				default: null
			}
		]
	},
	category: {
		tableName: 'game_category',
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
				default: 'game/category'
			},
			{
				type: 'string',
				params: ['slug'],
				fn: [],
				default: 'games'
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
			tableName: 'game_category_relative',
			mainSchema: 'game',
			relativeSchema: 'game'
		}
	}
}

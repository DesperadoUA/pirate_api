/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const schema = require('../../schemas/vendor')
exports.up = function (knex) {
	return knex.schema.createTable(schema.metaFields.tableName, table => {
		table.integer('post_id').unsigned().references('id').inTable(schema.tableName).onDelete('CASCADE')
		schema.metaFields.fields.forEach(item => {
			let supportTable = table[item.type](...item.params)
			item.fn.forEach(fn => supportTable[fn]())
			if (item.default !== null) supportTable.defaultTo(item.default)
			if (item.type === 'timestamp') supportTable.defaultTo(knex.raw('CURRENT_TIMESTAMP'))
		})
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}

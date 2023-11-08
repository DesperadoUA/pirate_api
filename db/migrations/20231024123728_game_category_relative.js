/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const schema = require('../../schemas/game')
exports.up = function (knex) {
	return knex.schema.createTable(schema.relatives.category.tableName, function (table) {
		table.integer('post_id').unsigned().references('id').inTable(schema.tableName).onDelete('CASCADE')
		table.integer('relative_id').unsigned().references('id').inTable(schema.category.tableName).onDelete('CASCADE')
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schemas.dropTable(schema.relatives.category.tableName)
}

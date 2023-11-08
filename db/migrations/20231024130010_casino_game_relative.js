/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const schema = require('../../schemas/casino')
exports.up = function (knex) {
	return knex.schema.createTable(schema.relatives.casino_game.tableName, function (table) {
		table
			.integer('post_id')
			.unsigned()
			.references('id')
			.inTable(schema.relatives.casino_game.mainTable)
			.onDelete('CASCADE')
		table
			.integer('relative_id')
			.unsigned()
			.references('id')
			.inTable(schema.relatives.casino_game.relativeTable)
			.onDelete('CASCADE')
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schemas.dropTable(schema.relatives.casino_game.tableName)
}

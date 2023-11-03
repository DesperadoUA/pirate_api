const { SHEET_ID } = require('./sheetClient.js')
const { sheets } = require('./sheetClient.js')
class Model {
	static async insert(data) {
		try {
			await sheets.spreadsheets.values.append({
				spreadsheetId: SHEET_ID,
				range: 'Data',
				insertDataOption: 'INSERT_ROWS',
				valueInputOption: 'RAW',
				requestBody: {
					values: [[data.userID, data.date]]
				}
			})
			return 'ok'
		} catch (error) {
			return 'error'
		}
	}
}
module.exports = Model

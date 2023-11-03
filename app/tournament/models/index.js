const { SHEET_ID } = require('./sheetClient.js')
const { sheets } = require('./sheetClient.js')
class Model {
	static async insertVisit(data) {
		try {
			await sheets.spreadsheets.values.append({
				spreadsheetId: SHEET_ID,
				range: 'Visits',
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
	static async insertAction(data) {
		try {
			await sheets.spreadsheets.values.append({
				spreadsheetId: SHEET_ID,
				range: 'Action',
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

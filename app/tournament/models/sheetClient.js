const { google } = require('googleapis')
const key = require('../secrets.json')
const SHEET_ID = '1WvbDNEYMLtjzDqjVRrN5bqQ6Z4XkyePOiiVT1wrtL-0'
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
	'https://www.googleapis.com/auth/spreadsheets'
])
const sheets = google.sheets({ version: 'v4', auth: client })
module.exports = { sheets, SHEET_ID }

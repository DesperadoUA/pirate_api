const { google } = require('googleapis')
const key = require('../secrets.json')
const SHEET_ID = '1TwIt8Ma_Easm-nt6zi_m1_mdRzx8zLnJOX4rZBIiLio'
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
	'https://www.googleapis.com/auth/spreadsheets'
])
const sheets = google.sheets({ version: 'v4', auth: client })
module.exports = { sheets, SHEET_ID }

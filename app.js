const express = require("express")
const rateLimit = require("express-rate-limit")
const cors = require("cors")
const { google } = require("googleapis")

const app = express()
const waitForSec = 30

const limit = rateLimit({
	windowMs: 1000 * waitForSec, // 1 hour
	max: 10,
	message:
		"Слишком много запросов с одного IP, пожалуйста подождите " +
		waitForSec +
		" секунд",
})

app.use("/", limit)

// настройки cors
app.use(
	cors({
		origin: "*",
	})
)

const sheets = google.sheets({
	version: "v4",
	auth: process.env.GOOGLE_API_KEY,
})

// Путь по умолчанию
app.get("/", async (req, res) => {
	try {
		res.json({
			property: "Backend is working",
		})
	} catch (error) {
		console.error(error)
		res.status(500).send("Internal Server Error")
	}
})

// Путь для получения данных
app.get("/data", async (req, res) => {
	try {
		// Получение данных из Google Sheets API
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
			range: "A1:Z100",
		})

		// Отправка данных на виджет
		res.json(response.data.values)
	} catch (error) {
		console.error(error)
		res.status(500).send("Internal Server Error")
	}
})

// Запуск сервера
const port = 3000
app.listen(port, () => {
	console.log("Server started on port " + port)
})

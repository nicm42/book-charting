import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const key = process.env.API_KEY;
const sheetID = process.env.SHEET_ID;
const link = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?key=${key}`;

let dataToSend = new Array();

// Get the sheet names
app.get('/api', async (req, res) => {
  const response = await fetch(link);
  const data = await response.json();

  const numberOfSheets = data.sheets.length;

  data.sheets.forEach((sheet) => {
    getSheetData(sheet.properties.title, numberOfSheets, res);
  });
});

// Now use the sheet names to get the data from each
async function getSheetData(sheetName, numberOfSheets, res) {
  const sheetLink = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${key}`;
  const response = await fetch(sheetLink);
  const data = await response.json();
  const newData = { sheet: sheetName, data: data.values };
  dataToSend.push(newData);
  if (dataToSend.length === numberOfSheets) {
    res.send(dataToSend);
  }
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

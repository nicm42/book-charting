import IDataToSend from './interfaces/IDataToSend';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const key = process.env.API_KEY;
const sheetID = process.env.SHEET_ID;
const link = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}?key=${key}`;

interface PropertyData {
  title: string;
}

interface SheetData {
  properties: PropertyData;
}

interface IData {
  sheets: SheetData[];
}

// Get the sheet names
app.get('/api', async (_req: Request, res: Response) => {
  const response = await fetch(link);
  const data: IData = await response.json();
  let dataToSend = new Array() as IDataToSend[];

  // Now use the sheet names to get the data from each
  for (const sheet of data.sheets) {
    const sheetName: string = sheet.properties.title;
    const sheetLink = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${key}`;
    const response = await fetch(sheetLink);
    const data = await response.json();
    const newData = { sheet: sheetName, data: data.values };
    dataToSend.push(newData);
  }

  res.send(dataToSend);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

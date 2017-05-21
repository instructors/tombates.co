import { csvParseRows } from "d3";
import { parseDateWithSlash } from './parseDate';

const coerceRows = row => {
  return {
    date: parseDateWithSlash(row[0]),
    workout: row[2],
    weight: +row[3].replace('kg', ''),
    exercises: [{
      name: row[4],
      kilos: +row[5],
      pounds: +row[6],
      sets: [
        +row[7] || false,
        +row[8] || false,
        +row[9] || false,
        +row[10] || false,
        +row[11] || false,
      ]
    },{
      name: row[12],
      kilos: +row[13],
      pounds: +row[14],
      sets: [
        +row[15] || false,
        +row[16] || false,
        +row[17] || false,
        +row[18] || false,
        +row[19] || false,
      ]
    },{
      name: row[20],
      kilos: +row[21],
      pounds: +row[22],
      sets: [
        +row[23] || false,
        +row[24] || false,
        +row[25] || false,
        +row[26] || false,
        +row[27] || false,
      ]
    },{
      name: row[28],
      kilos: +row[29],
      pounds: +row[30],
      sets: [
        +row[31] || false,
        +row[32] || false,
        +row[33] || false,
        +row[34] || false,
        +row[35] || false,
      ]
    },{
      name: row[36],
      kilos: +row[37],
      pounds: +row[38],
      sets: [
        +row[39] || false,
        +row[40] || false,
        +row[41] || false,
        +row[42] || false,
        +row[43] || false,
      ]
    }]
  }
}

export const parseStrongliftsData = data => {
  return csvParseRows(data, coerceRows)
}

export default parseStrongliftsData;

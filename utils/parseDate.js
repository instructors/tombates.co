import * as Fecha from 'fecha';

export const parseDateWithSlash = date => {
  return Fecha.parse(date, 'DD/MM/YY');
};

export const parseDateWithHyphen = date => {
  return Fecha.parse(date, 'YYYY-MM-DD');
};

export default parseDateWithSlash;

import 'isomorphic-fetch'
import { parseDateWithHyphen } from './parseDate';

const MONTH = 2628000000;
export const AVAILABLE = 'AVAILABLE';
export const UNAVAILABLE = 'UNAVAILABLE';
export const SOON = 'SOON';

const URL = 'https://my.cushionapp.com/api/v1/users/d9061227-85d2-4a03-abb4-c91b2cfd3ac7/availability';

export const determineAvailability = date => {
  const diff = parseDateWithHyphen(date) - Date.now();
  if (date && diff < MONTH) return AVAILABLE;
  if (date && diff < (10 * MONTH)) return SOON;
  return UNAVAILABLE;
}

export const fetchAvailability = async () => {
  const res = await fetch(URL);
  const { availability } = await res.json();

  return {
    availability: {
      isAvailable: determineAvailability(availability.available_on),
      ...availability,
    },
  }
}

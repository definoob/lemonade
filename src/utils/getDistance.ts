/**
 * https://en.wikipedia.org/wiki/Haversine_formula
 */

interface ILocation {
  lat: number;
  long: number;
}

export const getDistance = (start: ILocation, end: ILocation): string => {
  if (start.lat === end.lat && start.long === end.long) {
    return '0 km';
  }
  let radlat1 = (Math.PI * start.lat) / 180;
  let radlat2 = (Math.PI * end.lat) / 180;
  let theta = start.long - end.long;
  let radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = ((dist * 180) / Math.PI) * 111.18957696;
  return dist.toFixed(1) + ' km';
};

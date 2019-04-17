import * as Keys from './apiKeys';

const api = 'https://graph.facebook.com/';
const version = 'v3.2';
const accessToken = Keys.FB_ACCESS_TOKEN;
const fields = ['name', 'id', 'about', 'price_range', 'overall_star_rating'];

export const getPlaceInformation = (placeId) =>
  fetch(
    `${api}/${version}/${placeId}?fields=${fields}&access_token=${accessToken}`
  );

import * as Keys from './apiKeys';

const api = 'https://graph.facebook.com/';
const version = 'v3.2';
const accessToken = Keys.FB_ACCESS_TOKEN;
const fields = ['name', 'id', 'location', 'picture', 'link', 'price_range', 'overall_star_rating'];

function handleErrors(response) {
  if (!response.ok) {
    throw response;
  }
  return response;
}

export const getPlaceInformation = (placeId) =>
  fetch(
    `${api}/${version}/${placeId}?fields=${fields}&access_token=${accessToken}`
  ).then(handleErrors);


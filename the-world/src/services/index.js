import axios from 'axios';
const COUNTRY_API_ENDPOINT = 'https://restcountries.com/v2';

export async function getAllcountries() {
  //call the api and get the result
  return axios.get(`${COUNTRY_API_ENDPOINT}/all`)
}

export default function getCountryDetails(countryCode) {
  return axios.get(`${COUNTRY_API_ENDPOINT}/alpha/${countryCode}`)
}


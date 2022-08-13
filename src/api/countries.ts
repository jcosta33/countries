import { Params } from "@/models";
import { CountriesParams } from "@/models/country";
import config from "./config";

const url = "https://restcountries.com/v3.1";

export const getCountries = async (params: CountriesParams) => {
  if (!params.page_size) {
    params.page_size = 100;
  }
  if (!params.page) {
    params.page = 1;
  }
  if (!params.filter) {
    params.filter = "all";
  }
  if (!params.value) {
    params.value = "";
  }
  let requestUrl = `${url}/${params.filter}/${params.value}?page=${params.page}&page_size=${params.page_size}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    ...config(),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw await response.json();
  }
};
export const getCountry = async (params: Params) => {
  let requestUrl = `${url}/alpha/${params.cca2}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    ...config(),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw await response.json();
  }
};

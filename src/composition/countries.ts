import { Country } from "@/models/country";

const countryIsBorder = (country: Country, border: string) => {
  return (
    country.car.signs?.includes(border) ||
    country.cca2 === border ||
    country.cca3 === border ||
    country.ccn3 === border ||
    country.ccn3 === border ||
    country.fifa?.toLocaleLowerCase() === border.toLocaleLowerCase()
  );
};

export default () => ({
  countryIsBorder,
});

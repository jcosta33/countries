import { Resolve } from "@/models";

import { CountriesParams, Country } from "@/models/country";
import { defineStore } from "pinia";
import { getCountries } from "@/api/countries";

export const useStore = defineStore("main", {
  state: () => ({
    countries: { list: [] as Country[], loading: false },
  }),

  // Didn't need getters

  actions: {
    getCountries(params?: CountriesParams) {
      return new Promise((resolve: Resolve<Country[]>) => {
        this.countries.loading = true;

        getCountries(params || {})
          .then((response) => {
            this.countries.loading = false;
            this.countries.list = response;
            resolve(response);
          })
          .catch(() => {
            this.countries.loading = false;
            this.countries.list = [];
            resolve([]);
          });
      });
    },
  },
});

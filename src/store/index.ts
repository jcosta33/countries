import { Popup, Resolve } from "@/models";

import { CountriesParams, Country } from "@/models/country";
import { defineStore } from "pinia";
import useUtils from "@/composition/utils";
import { getCountries } from "@/api/countries";

const { uuidv4 } = useUtils();

export const useStore = defineStore("main", {
  state: () => ({
    countries: { list: [] as Country[], loading: false },
  }),
  getters: {},
  actions: {
    // createDanceoff(payload: DanceOffPayload) {
    //   return new Promise((resolve: Resolve<Danceoff[]>) => {
    //     thiss.loading = true;
    //     createDanceoff(payload).then((response) => {
    //       thiss.loading = false;
    //       thiss.participated = true;
    //       thiss.list.push(response);
    //       resolve(response);
    //     });
    //   });
    // },

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
    // addPopup(popup: Popup) {
    //   const id = uuidv4();
    //   popup.onClose = () => {
    //     this.popups = this.popups.filter((statePopup) => statePopup.id !== id);
    //   };
    //   this.popups.push({ ...popup, id });
    //   if (popup.autohide) {
    //     setTimeout(() => {
    //       this.popups = this.popups.filter(
    //         (statePopup) => statePopup.id !== id
    //       );
    //     }, 5000);
    //   }
    // },
  },
});

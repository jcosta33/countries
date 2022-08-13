<script setup lang="ts">
import { getCountry } from "@/api/countries";
import { Country } from "@/models/country";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import useCountries from "@/composition/countries";
const store = useStore();
const route = useRoute();
let country = ref({} as Country);

const { countryIsBorder } = useCountries();

const loadCountry = async () => {
  const cca2 = route.params.cca2 as string;

  const response = (await getCountry({ cca2 })) as Country[];
  country.value = response[0];
};

const getCountryFromBorder = (border: string) => {
  return store.countries.list.find((country) =>
    countryIsBorder(country, border)
  );
};

store.getCountries();

await loadCountry();

const relatedCountries = computed(() =>
  store.countries.list.filter((relatedCountry) =>
    relatedCountry.borders?.find((border) =>
      countryIsBorder(country.value, border)
    )
  )
);

watch(() => route.params, loadCountry);
</script>

<template>
  <div class="country-detail">
    <div class="media">
      <div class="media-left">
        <figure class="image"><img :src="country.flags.png" alt="" /></figure>
      </div>
      <div class="media-content">
        <div class="columns">
          <div class="column">
            <h3 class="title is-3">{{ country.name.common }}</h3>
            <h4 class="subtitle">
              <router-link
                :to="`/countries?filter=subregion&value=${country.subregion}`"
                >{{ country.subregion }}</router-link
              >,
              <router-link
                :to="`/countries?filter=region&value=${country.region}`"
                >{{ country.region }}</router-link
              >
            </h4>
            <p>
              Languages:
              <span class="tags">
                <router-link
                  :to="`/countries?filter=lang&value=${language}`"
                  class="tag is-info"
                  v-for="language in country.languages"
                >
                  {{ language }}
                </router-link>
              </span>
            </p>
            <p>
              Currencies:
              <span class="tags">
                <router-link
                  :to="`/countries?filter=currency&value=${currency?.name.toLowerCase()}`"
                  class="tag is-info"
                  v-for="currency in country.currencies"
                >
                  {{ currency?.name }}
                </router-link>
              </span>
            </p>
          </div>
          <div class="column">
            <p>
              Capital:
              <span class="tags">
                <span class="tag" v-for="capital in country.capital">
                  {{ capital }}
                </span>
              </span>
            </p>
            <p>
              Area:
              <span class="tags">
                <span class="tag">
                  {{
                    Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(country.area)
                  }}m<sup>2</sup>
                </span>
              </span>
            </p>
            <p>
              Population:
              <span class="tags">
                <span class="tag">
                  {{
                    Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(country.population)
                  }}
                </span>
              </span>
            </p>
            <p>
              Continent:
              <span class="tags">
                <span class="tag" v-for="continent in country.continents">
                  {{ continent }}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <p style="margin-top: 1rem">
      Timezones:
      <span class="tags">
        <span class="tag" v-for="timezone in country.timezones">
          {{ timezone }}
        </span>
      </span>
    </p>
    <hr />
    <h3 class="title is-3">Bordering countries</h3>
    <p v-if="relatedCountries.length === 0">Island perhaps?</p>
    <div class="columns is-multiline">
      <div class="column is-3" v-for="country in relatedCountries">
        <router-link :to="`/country/${country.cca2}`" class="box country">
          <h4 class="title is-4">
            {{ country.flag }} {{ country.name.common }}
          </h4>
          <h5 class="subtitle">
            {{ country.subregion }},
            {{ country.region }}
          </h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.country-detail {
  .subtitle {
    .icon {
      vertical-align: bottom;
    }
  }
  .tags {
    margin-top: 0.5rem;
    display: inline-block;
  }
}
</style>

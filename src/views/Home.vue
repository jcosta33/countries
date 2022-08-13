<template>
  <section id="home" class="section">
    <h1 class="title is-1">Flags and stuff</h1>
    <h3 class="subtitle">Welcome to the wonderous world of countries!</h3>

    <div class="columns">
      <div class="column is-4">
        <router-link to="/countries" class="box is-primary has-text-centered">
          <span class="icon">
            <i class="material-icons-outlined">flag</i>
          </span>
          <h4 class="title is-3">Countries</h4>
          <p>Behold a list of countries</p>
        </router-link>
      </div>
      <div class="column is-4">
        <router-link
          to="/countries?filter=currency&value=euro"
          class="box is-primary has-text-centered"
        >
          <span class="icon">
            <i class="material-icons-outlined">euro</i>
          </span>
          <h4 class="title is-3">Euro countries</h4>
          <p>Countries conquered by germany</p>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4">
        <router-link to="/country/tw" class="box">
          <div class="media">
            <div class="media-content">
              <h4 class="title is-4">Best country</h4>
              <p>Based on scientifically tested metrics</p>
            </div>
            <div class="media-right">
              <span class="icon">
                <i class="material-icons-outlined is-size-3">star</i>
              </span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column is-4">
        <router-link to="/country/fr" class="box">
          <div class="media">
            <div class="media-content">
              <h4 class="title is-4">Worst country</h4>
              <p>Proven in laboratory conditions and such</p>
            </div>
            <div class="media-right">
              <span class="icon">
                <i class="material-icons-outlined is-size-3"
                  >sentiment_very_dissatisfied</i
                >
              </span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column is-4">
        <div class="box">
          <div class="media">
            <div class="media-content">
              <h4 class="title is-4">Leave</h4>
              <p>Go back the way you came and inflict pain upon yourself!</p>
            </div>
            <div class="media-right">
              <span class="icon">
                <i class="material-icons-outlined is-size-3">logout</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#home .box {
  .icon {
    font-size: 4rem;
    height: auto;
  }
  .icon + .title {
    margin: 1rem 0 0.25rem;
  }

  &:hover {
    .icon {
      color: $primary;
    }
  }
}
</style>

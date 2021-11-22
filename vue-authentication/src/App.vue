<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <guest-nav v-if="!isLogged"></guest-nav>
        <logged-nav v-else></logged-nav>
      </div>
      <router-view/>
    </b-container>
    <div class="position-absolute loader w-100 h-100 justify-content-center align-items-center"
      style="top: 0; left: 0; background: #00000026;"
      v-show="loading"
    >
      <b-spinner style="width: 3rem; height: 3rem;" type="grow" variant="primary"></b-spinner>
    </div>
  </div>
</template>

<style>
  .loader{
    display: flex;
  }
</style>

<script>
import { BSpinner } from 'bootstrap-vue'
import { mapState } from 'vuex'

import GuestNav from '@/components/layout/GuestNav.vue'
import LoggedNav from '@/components/layout/LoggedNav.vue'

export default {
  components: {
    BSpinner, GuestNav, LoggedNav
  },
  computed: {
    ...mapState(['loading']),
    ...mapState('auth', ['isLogged'])
  }
}
</script>

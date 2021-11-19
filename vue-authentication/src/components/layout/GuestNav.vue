<template>
  <b-nav tabs>
    <b-nav-item to="/login" exact>Login</b-nav-item>
    <b-nav-item to="/about" exact>Sobre nosotrso</b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'
export default {
    name: "GuestNav",
    components:{
        BNav, BNavItem
    }
}
</script>
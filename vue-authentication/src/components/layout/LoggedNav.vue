<template>
  <b-nav tabs>
    <b-nav-item to="/about" exact>Sobre nosotrso</b-nav-item>
    <b-nav-item to="/secret" exact>Secret</b-nav-item>
    <b-nav-item to="/users" exact>Listado de users</b-nav-item>
    <b-nav-item @click="_logout">Cerrar sesión</b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue';
import { mapMutations } from 'vuex'

export default {
    name: "GuestNav",
    components:{
        BNav, BNavItem
    },
    methods: {
        ...mapMutations('auth', ['logout']),
        _logout(){
            this.logout();
            this.$router.push('/login');
        }
    }
}
</script>
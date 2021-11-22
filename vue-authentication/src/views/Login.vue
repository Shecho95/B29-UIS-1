<template>
    <div class="mt-5">
        <h1>Inicio de sesión</h1>
        <login-form :user="user" @login="_login"></login-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'; 

import LoginForm from '@/components/auth/LoginForm'

export default {
    components: {
        LoginForm
    },
    data(){
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        async _login(){
            const validateForm = await this.$validator.validateAll();

            if(!validateForm){
                return false
            }

            await this.login(this.user).then(() =>{
                this.$router.push('/secret')
            })
        }
    }
}
</script>
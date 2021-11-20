<template>
    <div>
        <h2>Listado de usuarios</h2>
        <ul>
            <li v-for="user in usersList" :key="user.userId"> {{ user.name + ' - ' + user.rol }} </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            usersList: []
        }
    },
    mounted(){
        this.axios.get('/api/users').then(res => this.usersList = res.data.users);
    }
}
</script>
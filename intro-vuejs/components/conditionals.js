Vue.component('conditionals', {
    template: `
        <div>
            <h1> Condicionales v-if y v-show </h1>
            <a href="#" @click="changeSatus"> Cambiar estado </a>
            <div v-if="bandera">
                Control de condicional con directiva v-if 
            </div>
            <div v-show="bandera"> 
                Control de condicional con directiva v-show 
            </div>
        </div>
    `,
    data(){
        return {
            bandera: true,
        }
    },
    methods: {
        changeSatus(){
            this.bandera = !this.bandera;
        }
    }
})
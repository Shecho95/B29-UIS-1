Vue.component('vmodel', {
    template: `
        <div>
            <h1> Bindeo de data con v-model </h1>
            <input v-focus v-model="name" >
            <p> Hola {{ name }}, que bueno verte de nuevo </p>
        </div>
    `,
    data(){
        return {
            name: "Hernan"
        }
    }
})
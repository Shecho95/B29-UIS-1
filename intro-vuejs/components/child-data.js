Vue.component('child-data', {
    template: `
        <div>
            <h1> Data y eventos de componentes hijos </h1>
        </div>
    `,
    data(){
        return {
            childMessage: "Data interna del componente hijo",
            textAlert: "Esto es un alert desde el componente hijo"
        }
    },
    methods: {
        showAlert(){
            alert(this.textAlert);
        }
    }
})
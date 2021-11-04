Vue.component('methods', {
    template: `
        <div>
            <h1> Metodos </h1>
            <p @click="exampleMethod"> Hacer clic para ejecutar method </p>
        </div>
    `,
    methods: {
        exampleMethod() {
            this.showAlert();
        },
        showAlert(){
            alert('Se ejecuto cuando se disparo el evento clic');
        }
    }
})
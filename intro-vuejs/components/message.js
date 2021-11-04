Vue.component('message', {
    template: `
        <div>
            <h1> Message component </h1>
            <p> {{ message }} </p>
        </div>
    `,
    data(){
        return {
            message: "Hola mundo!"
        }
    }
})
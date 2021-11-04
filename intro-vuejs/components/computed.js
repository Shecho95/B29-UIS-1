Vue.component('computed', {
    template: `
        <div>
            <h1> Computed propeties</h1>
            <p> {{ name }} {{ lastname }} </p>
            <p> Full name: {{ fullName }} </p>
        </div>
    `,
    data(){
        return {
            name: "Lupe",
            lastname: "De Los Angeles"
        }
    },
    computed: {
        fullName(){
            return `${ this.name } de la casa ${ this.lastname }`
        }
    }
})
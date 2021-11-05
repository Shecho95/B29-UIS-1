Vue.component('watchers', {
    template: `
        <div>
            <h1> Componente con watcher </h1>
            <button @click="fetchUserData"> Consumir API usuario </button>
            <p> User actual: {{ user }} </p>
            <p> User anterior: {{ oldValue }} </p>
        </div>
    `,
    data(){
        return {
            user: null,
            oldValue: null
        }
    },
    watch:{
        user(newValue, oldValue){
            this.user = newValue;
            this.oldValue = oldValue;
        }
    },
    methods: {
        async fetchUserData(){
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            const user = json.results[0];
            this.user = `${ user.name.title } ${ user.name.first } ${ user.name.last }`;
            console.log(user);
        }
    }
})
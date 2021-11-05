Vue.component('load-dynamic', {
    template: `
        <div>
            <h1> Carga dinamica de componentes </h1>
            <button
                v-for="comp in components"
                :key="comp"
                @click="changeComp(comp)"
            > {{ comp }} </button>
            <component :is="currentComp" />
        </div>
    `,
    data(){
        return {
            components: ['comp1', 'comp2', 'comp3'],
            currentComp: 'comp1'
        }
    },
    methods: {
        changeComp(strComp){
            this.currentComp = strComp;
        }
    }
})
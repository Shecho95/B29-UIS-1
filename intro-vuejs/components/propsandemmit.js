Vue.component('propsandemmit', {
    template: `
        <div>
            <h1> Props y emitir eventos </h1>
            <p 
                v-for="(option, index) in options" 
                :key="index"
                @click="action(option.id)"
            >
                {{ option.str }}
            </p>
        </div>
    `,
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    methods: {
        action(optionId){
            this.$emit('save-date', optionId);
        }
    }
})
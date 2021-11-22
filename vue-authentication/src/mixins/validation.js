export default {
    methods: {
        validateState(ref){
            if(this.VeeFields[ref] && ( this.VeeFields[ref].dirty || this.VeeFields[ref].validated)){
                return ! this.errors.has(ref) ? true : false
            }
            return null
        }
    }
}
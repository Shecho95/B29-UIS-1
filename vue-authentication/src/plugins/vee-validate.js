import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import validatorEs from 'vee-validate/dist/locale/es'

Vue.use(VeeValidate, {
    fieldsBagName: 'VeeFields'
});

Validator.localize('es', validatorEs);

Validator.extend('rude_password', {
    getMessage: field => `El campo ${ field } no cumple con los criterios de seguridad, min: 1 mayus, 1 minus, 1 num, 1 char especial`,
    validate: value => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return strongRegex.test(value);
    }
})
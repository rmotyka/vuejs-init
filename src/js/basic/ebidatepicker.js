import Vue from '../../lib/vue/vue.js';
import template from './ebidatepicker.html';

const EbiDatepicker = Vue.extend({
    template: template,

    props: ['msg', 'message', 'validationMsg', 'notValid'],

    ready: function() {
        //console.log("datepicker is ready!");

    },

    methods: {
        notify: function() {
            alert(this.message);
        },
        validate: function() {
        	var that = this;
            this.$emit('validate', this, this.message, function(validMessage) {
                console.log("callback from parent " + validMessage);
                if (validMessage !== "") {
                    console.log("Not valid");
                    that.validationMsg = validMessage;
                    that.notValid = true;
                } else {
                    console.log("Valid");
                    that.validationMsg = "";
                    that.notValid = false;
                }
            });
        }
    }
});

export default EbiDatepicker;

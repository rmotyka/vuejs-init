import Vue from '../../lib/vue/vue.js';
import template from './osoba.html';

const Osoba = Vue.extend({
    template: template,
    data: function() {
        return {
            message: 1,
            nazwisko: "",
            imie: "",
            dataUrodzenia: ""
        }
    },
    methods: {
        notify: function() {
        	var s = JSON.stringify(this.$data);
            alert(s);
        },
        validateImie: function(src, msg, cb) {
        	if (msg.length < 3){
        		cb("Jeset mniejsze niż 3");
        	} else {
        		cb("");
        	}
        },
        getColumns: function() {
            // obiekt z columnDefs
            var d = [ 
                {
                    "targets": 0,
                    "render": function ( data, type, full, meta ) {
                        return '<a href="'+full[0]+'">'+full[0]+'</a>';
                    }
                },
                {
                    "targets": 1,
                    "orderable": false
                }
               ];

            return d;
        }        
    },
    computed: {

    }
});

export default Osoba;

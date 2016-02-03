import Vue from '../../lib/vue/vue.js';
import template from './ebigrid.html';

const EbiGrid = Vue.extend({
    template: template,
    props: ['url', 'devsy'],
    ready: function() {
        var tabela = this.$el.getElementsByTagName("table")[0];
        $(tabela).DataTable({
            processing: true,
            serverSide: true,
            searching: false,
            ajax: {
            	url: this.url,
            	dataType: "jsonp"
            },
			"columnDefs": this.devsy()
        });
    }
});

export default EbiGrid;

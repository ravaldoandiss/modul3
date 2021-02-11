Vue.component('showform', {
    template: '#show-form' ,
    data(){
        return {
            data: {nama: '', alamat: '',umur: '', hobi: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.alamat = "";
            this.data.umur = "";
            this.data.hobi = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data:{
        toko: {
        }
    },
    methods: {
        getData: function (value) {    
            this.toko = {
                nama : value.nama,
                alamat : value.alamat,
                umur : value.umur,
                hobi : value.hobi
                
            }
        }
    }
})
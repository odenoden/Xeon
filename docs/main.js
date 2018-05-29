var app = new Vue({
    el: '#app',

    data: {
        list: ['りんご', 'ばなな', 'いちご'],
        XEM_Price: 0,
        message1: '',
        message2: '',
        show: true
    },

    methods: {
        handleClick: function (event) {
            alert(event.target) // [object HTMLButtonElement]
        }
    }
})
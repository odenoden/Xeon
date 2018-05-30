var app = new Vue({
    el: '#app',

    data: {
        XEM_Rate: 0,
        XEM_Price: 0,
        xembook_url: 'http://13.113.193.148/xembook/lastprice2.json'
    },

    created () {
        axios.get('http://23.228.67.85:7890/heartbeat')
        .then(function (response) {
            alert(response.data.message);
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get(this.xembook_url)
        .then(function (response) {
            app.XEM_Rate = Number(response.data.zaif);
        })
        .catch(function (error) {
            console.log(error);
        });

    },

    methods: {

        handleClick: function (message) {
            alert(message) // [object HTMLButtonElement]
        },

        getXEMPrice: function () {
            alert('開発中・・・')
        }
    }
})
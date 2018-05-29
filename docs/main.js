var app = new Vue({
    el: '#app',

    data: {
        list: ['りんご', 'ばなな', 'いちご'],
        XEM_Price: 0,
        message1: '',
        message2: '',
        show: true,
        zaif_url: 'https://api.zaif.jp/api/1/ticker/xem_jpy'
    },

    methods: {
        handleClick: function (message) {
            alert(message) // [object HTMLButtonElement]
        },

        // GET request
        httpGet : function(url){
            fetch('https://api.zaif.jp/api/1/ticker/xem_jpy').then(function(response) {
                alert('aaa')
                return response.text();
              }).then(function(text) {
                // textに文字列で結果が渡される
                alert('aaa')
              });
        }
    }
})
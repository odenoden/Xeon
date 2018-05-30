var app = new Vue({
    el: '#app',

    data: {
        list: ['りんご', 'ばなな', 'いちご'],
        XEM_Price: 0,
        message1: '',
        message2: '',
        show: true,
        zaif_url: 'https://api.zaif.jp/api/1/ticker/xem_jpy',
        result: '--'
    },

    mounted() {
        axios.get(zaif_url)
        .then(response => {this.result = response.data});
      },

      methods: {

        handleClick: function (message) {
            alert(message) // [object HTMLButtonElement]
        },

        // GET request
        getPosts(url) {
            alert(url);
            axios.get('https://api.zaif.jp/api/1/ticker/xem_jpy')
            .then(function (response) {
                alert('aaaa');
              console.log(response);
            })
            .catch(function (error) {
                alert(error.message);
              console.log(error);
            });
            alert('test1');
        }
    }
})
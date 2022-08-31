const axios = require('axios')

axios({
    method: "get",
    url: 'https://jsonplaceholder.typicode.com/users',
}).then(resp=>console.log(resp.data))
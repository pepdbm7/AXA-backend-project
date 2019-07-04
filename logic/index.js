const axios = require("axios");

const logic = {
    clients = [],
    policies = [],

    retrieveData() {
        
        //fetching all clients:
        axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
        .then(res => res.json())
        .then(res => clients.push(res))
        .then(() => console.log({clients: this.clients}))
        .catch(err => console.log(err));

        //fetching all policies:
        axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
        .then(res => res.json())
        .then(res => clients.push(res))
        .then(() => console.log({policies: this.policies}))
        .catch(err => console.log(err));
    },


    findClientById(id) {

    }
}
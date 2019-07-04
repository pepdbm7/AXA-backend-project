const axios = require("axios");

const logic = {
    clients: [],
    policies: [],

    retrieveData() {
        
        //fetching all clients:
        axios.get('http://www.mocky.io/v2/5808862710000087232b75ac')
        // .then(clients => clients.json())        
        .then(clients => this.clients = clients.data.clients)
        .catch(err => console.log(err));

        //fetching all policies:
        axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5')
        // .then(policies => policies.json())
        .then(policies => this.policies = policies.data.policies)
        .catch(err => console.log(err));
    },

    //clients requests:

    async findClientById(clientId) {
        
        let client = await this.clients.find(client => client.id === clientId);

        return await client;

    },

    async findClientByName(name) {

        let client = await this.clients.find(client => client.name === name);
        
        return await client;

    },

    //policies requests:

    async findPolicyByEmail(email) {

        let policy = await this.policies.find(policy => policy.email === email);
        
        return await policy;

    },

    async findPoliciesByClientId(clientId) {

        //I used 'filter' here as there might be multiple policies:
        let policies = await this.policies.filter(policy => policy.clientId === clientId);
        
        return await policies;

    }
};


module.exports = logic;

const axios = require("axios");
const data = require("../data/data");

const logic = {
  retrieveData() {
    //fetching all clients:
    axios
      .get("http://www.mocky.io/v2/5808862710000087232b75ac")
      .then(clients => (data.clients = clients.data.clients))
      .catch(err => console.log(err));

    //fetching all policies:
    axios
      .get("http://www.mocky.io/v2/580891a4100000e8242b75c5")
      .then(policies => (data.policies = policies.data.policies))
      .catch(err => console.log(err));
  },

  //clients requests:

  async findClientById(clientId) {
    let client = await data.clients.find(client => client.id === clientId);

    return await client;
  },

  async findClientByName(name) {
    let client = await data.clients.find(client => client.name === name);

    return await client;
  },

  //policies requests:

  async findPolicyByEmail(email) {
    let policy = await data.policies.find(policy => policy.email === email);

    return await policy;
  },

  async findPoliciesByClientId(clientId) {
    //I used 'filter' here as there might be multiple policies:
    let policies = await data.policies.filter(
      policy => policy.clientId === clientId
    );

    return await policies;
  }
};

module.exports = logic;

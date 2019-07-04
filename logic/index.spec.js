const { expect } = require('chai');
const logic = require('./index');
const axios = require('axios');


describe('client', () => {

    it('should return a client by Id', () => {

        const clientId = "a74c83c5-e271-4ecf-a429-d47af952cfd4";

        axios.get(`http://localhost:5000/client/id=${clientId}`)
            .then(res => {
                expect(res.client.id).to.be.equal(clientId);
            })
    });

    

    it('should fail on invalid clientId', () => {

        const clientId = 'asdf'

        axios.get(`http://localhost:5000/client/id=${clientId}`)
            .catch(err => {
                expect(() => err.error.to.be.equal('Client not found!'))
            });
    });


    it('should return error with no Id', () => {

        const clientId = "";

        axios.get(`http://localhost:5000/client/id=${clientId}`)
            .catch(err => {
                expect(() => err.error.to.be.equal('Bad request or invalid id'))
            });
    });
    

    it('should return a client by name', () => {

        const name = 'Ophelia'

        axios.get(`http://localhost:5000/client/name=${name}`)
            .then(res => {
                expect(res.client.name).to.be.equal(name);
            });
    });
});


//policy:

describe('policy', () => {

    it('should return a policy by its Email', () => {

        const policyEmail = "inesblankenship@quotezart.com";

        axios.get(`http://localhost:5000/policy/email=${policyEmail}`)
            .then(res => {
                expect(res.policy.email).to.be.equal(policyEmail);
            })
    });


    it('should return a policy by Client ID', () => {

        const clientId = "e8fd159b-57c4-4d36-9bd7-a59ca13057bb";

        axios.get(`http://localhost:5000/policy/clientId=${clientId}`)
            .then(res => {
                expect(res.policy.clientId).to.be.equal(clientId);
            })
    });

});
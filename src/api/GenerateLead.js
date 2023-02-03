import axios from 'axios';
const baseUrl = `https://Vendingportfolio-env-1.eba-pheiscrp.us-west-2.elasticbeanstalk.com api/lead`;

const GenerateLead = {
    createLead: (newLead) => {
        return axios.post(`${baseUrl}/create`, newLead)
    }
}

export default GenerateLead;
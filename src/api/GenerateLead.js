import axios from 'axios';
const baseUrl = `https://Vendingportfolio-env.eba-7zbsnfmb.us-west-2.elasticbeanstalk.com:5000/api/lead`;

const GenerateLead = {
    createLead: (newLead) => {
        return axios.post(`${baseUrl}/create`, newLead)
    }
}

export default GenerateLead;
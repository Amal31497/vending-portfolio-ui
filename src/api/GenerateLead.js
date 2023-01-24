import axios from 'axios';
const baseUrl = `https://vendingportfolio-env.eba-7zbsnfmb.us-west-2.elasticbeanstalk.com/api/lead`;

const GenerateLead = {
    createLead: (newLead) => {
        return axios.post(`${baseUrl}/create`, newLead)
    }
}

export default GenerateLead;
import axios from 'axios';
const baseUrl = `http://vendingportfolio-env.eba-7zbsnfmb.us-west-2.elasticbeanstalk.com:8080/api/lead`;

const GenerateLead = {
    createLead: (newLead) => {
        return axios.post(`${baseUrl}/create`, newLead)
    }
}

export default GenerateLead;
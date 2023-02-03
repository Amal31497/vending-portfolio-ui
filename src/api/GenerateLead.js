import axios from 'axios';
const baseUrl = `https://vending-portfolio-prod.cubxcyyzf0qw.us-west-2.rds.amazonaws.com/api/lead`;

const GenerateLead = {
    createLead: (newLead) => {
        return axios.post(`${baseUrl}/create`, newLead)
    }
}

export default GenerateLead;
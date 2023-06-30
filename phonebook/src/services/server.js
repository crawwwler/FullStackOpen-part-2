import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

// MY FUNCTIONALITY WAS OKAY UNTIL HERE \o/ 
const create = (nuName) => {
    return axios.post(baseUrl, nuName)
}


const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const replace = (id, nuName) => {
    return axios.put(`${baseUrl}/${id}`, nuName)
}


const server = {
    getAll,
    create,
    remove,
    replace
}

export default server


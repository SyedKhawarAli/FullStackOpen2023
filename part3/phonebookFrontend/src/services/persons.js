import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

const getOne = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
}

const create = (newObject) => { 
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
}

const update = (newObject) => { 
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject);
    return request.then((response) => response.data);
}
    
export default { getAll, getOne, create, deletePerson, update };
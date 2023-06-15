import axios from "axios";

const url = 'http://localhost:3001'

const listAllEvents = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const deleteEvent = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then()
}

const createEvent = (id, newEvent) => {
    const request = axios.put(`${url}/${id}`, newEvent)
    return request.then(response => response.data)
    
}

export default {listAllEvents, deleteEvent, createEvent}
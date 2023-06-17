import axios from "axios";

const url = 'http://localhost:3001/events'

const listAllEvents = async () => {
    const response = await axios.get(url)
    return response.data
}

const deleteEvent = async (id) => {
    const response = await axios.delete(`${url}/${id}`)
    return response.data
}

const createEvent = async (content) => {
    const response = await axios.post(url, content)
    return response.data
    
}

export default {listAllEvents, deleteEvent, createEvent}
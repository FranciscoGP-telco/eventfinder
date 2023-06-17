import { createSlice } from '@reduxjs/toolkit'

import eventService from '../services/events'

const eventSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        addEvent(state, action) {
            state.push(action.payload)
        },
        setEvents(state, action){
            return action.payload
        },

        deleteAnEvent(state, action) {
            state.splice(state.findIndex((event) => event.id === action.payload), 1);
        },

        searchAnEvent(state, action) {
            return state.filter(event => event.name.toUpperCase().includes(action.payload.toUpperCase()))
        }

    },
})

export const initializeEvents = () => {
    return async dispatch => {
        const events = await eventService.listAllEvents()
        dispatch(setEvents(events))
    }
}

export const createEvent = content => {
    return async dispatch => {
        const newEvent = await eventService.createEvent(content)
        dispatch(addEvent(newEvent))
    }
}

export const deleteEvent = id => {
    return async dispatch => {
        const deletedEvent = await eventService.deleteEvent(id)
        dispatch(deleteAnEvent(deletedEvent))
    }
}

export const searchEvent = name => {
    return async dispatch => {
        const events = await eventService.listAllEvents()
        const filterEvents = events.filter(event => event.name.toUpperCase().includes(name.toUpperCase()))
        console.log(name)
        console.log(filterEvents)
        dispatch(searchAnEvent(filterEvents))
    }
}

export const { addEvent, setEvents, deleteAnEvent, searchAnEvent } = eventSlice.actions

export default eventSlice.reducer
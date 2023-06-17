import { useDispatch } from 'react-redux'
import { createEvent } from '../reducers/eventReducer'

const Create = () => {
    const dispatch = useDispatch()

    const addEvent = async (event) => {
        event.preventDefault()
        const content = {
            name: event.target.name.value,
            date: event.target.day.value,
            city: event.target.city.value,
            address: event.target.address.value
        }
        event.target.name.value = ''
        event.target.day.value = ''
        event.target.city.value = ''
        event.target.address.value = ''

        dispatch(createEvent(content))
    }

    return (
        <form onSubmit={addEvent}>
            <label>Event Name: </label><input name="name" /> <br/>
            <label>Event Date: </label><input type="date" name="day" /> <br/>
            <label>City of the Event: </label><input name="city" /> <br/>
            <label>Address of the Event: </label><input name="address" /> <br/>
            <button type="submit"> Add event</button>
        </form>
    )
}

export default Create
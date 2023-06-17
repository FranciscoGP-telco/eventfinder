import { useDispatch } from 'react-redux'
import { createEvent } from '../reducers/eventReducer'
import { Form, Button } from 'react-bootstrap'

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
        <div>
            <h2>Add an event</h2>
            <Form onSubmit={addEvent}>
                <Form.Group>
                    <Form.Label>Event Name: </Form.Label><Form.Control name="name" /> <br/>
                    <Form.Label>Event Date: </Form.Label><Form.Control type="date" name="day" /> <br/>
                    <Form.Label>City of the Event: </Form.Label><Form.Control name="city" /> <br/>
                    <Form.Label>Address of the Event: </Form.Label><Form.Control name="address" /> <br/>
                    <Button variant="primary" type="submit"> Add event</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Create
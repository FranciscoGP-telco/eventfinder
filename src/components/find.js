import { useDispatch, useSelector } from "react-redux"
import { searchAnEvent } from "../reducers/eventReducer";
import { Table, Form } from 'react-bootstrap'

const Find = () => {   
    const dispatch = useDispatch()


    let events = useSelector(state => {
        return state.events
    })  

    const handleOnChange = (name) => {
        console.log(name);
        events = dispatch(searchAnEvent(name))
    }

    return(
        <div>
            <h2>Search for an Event</h2>
            <Form.Label>Search:</Form.Label><Form.Control name="name" onChange={(e) => handleOnChange(e.target.value)}/> <br/>
            <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {events.map(
                        event => 
                        <tr>
                            <td>{event.name}</td>
                            <td>{event.city}, {event.address}</td>
                            <td>{event.date}</td>
                        </tr>   
                    )}
                </tbody>
            </Table>
        </div>
    )
    /*return(
        <div>
        <label>Search:</label><input name="name" onChange={(e) => handleOnChange(e.target.value)}/> <br/>
        <h2>Here it is the list with found events</h2>
        {events.map(
            event => 
            <div>
                <p>{event.name}</p>
            </div>   
        )}
        </div>
    )*/
}

export default Find

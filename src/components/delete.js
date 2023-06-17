import { useDispatch, useSelector } from 'react-redux'
import { deleteEvent } from "../reducers/eventReducer"
import { Table, Button } from 'react-bootstrap'

const Delete = () => {
    const dispatch = useDispatch()

    const events = useSelector(state => {
        return state.events
    })
    
    const handleDelete = async (e, id) => {
        console.log(e)
        e.preventDefault()
        dispatch(deleteEvent(id))
    }

    return(
        <div>
        <h2>Click in the button to delete an event</h2>
        <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {events.map(
                        event => 
                        <tr>
                            <td>{event.name}</td>
                            <td>
                            <form>
                                <Button variant="danger" onClick={(e) => handleDelete(e, event.id)} >Delete event</Button>
                            </form>
                            </td>
                        </tr>   
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Delete
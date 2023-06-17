import { useSelector } from "react-redux"
import { Table } from 'react-bootstrap'

const Main = () => {
    const events = useSelector(state => {
        return state.events
    })
    
    return(
        <div>
            <h2 > Here it is the list with the last events</h2>
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
}

export default Main
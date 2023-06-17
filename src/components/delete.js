import { useDispatch, useSelector } from 'react-redux'
import { deleteEvent } from "../reducers/eventReducer"

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
        {events.map(
            event => 
            <div>
                <h3>{event.name}</h3>
                <form>
                    <button onClick={(e) => handleDelete(e, event.id)} >Delete event</button>
                </form>
            </div>   
        )}
        </div>
    )
}

export default Delete
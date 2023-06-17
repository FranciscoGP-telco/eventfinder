import { useSelector } from "react-redux"


const Main = () => {
    const events = useSelector(state => {
        return state.events
    })
    
    return(
        <div>
        <h2>Here it is the list with the last events</h2>
        {events.map(
            event => 
            <div>
                <h3>{event.name}</h3>
                <p>Place: {event.city}, {event.address}</p>
                <p>Day: {event.date}</p>
            </div>   
        )}
        </div>
    )
}

export default Main
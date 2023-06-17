import { useDispatch, useSelector } from "react-redux"
import { searchAnEvent } from "../reducers/eventReducer";

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
        <label>Search:</label><input name="name" onChange={(e) => handleOnChange(e.target.value)}/> <br/>
        <h2>Here it is the list with found events</h2>
        {events.map(
            event => 
            <div>
                <p>{event.name}</p>
            </div>   
        )}
        </div>
    )
}

export default Find

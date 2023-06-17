import {Link, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'

import { initializeEvents } from './reducers/eventReducer'
import { useDispatch } from 'react-redux'


import Create from './components/create'
import Find from './components/find'
import Delete from './components/delete'
import Main from './components/main'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeEvents())
  }, [dispatch])
  
  return (
    <div>
      <h2>Event finder</h2>
      <Link to='/main'>Go Home</Link>
      <Link to='/create'>Create an Event</Link>
      <Link to='/find'>Find an Event</Link>
      <Link to='/delete'>Delete an Event</Link>
      <hr/>

      <Routes>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/find' element={<Find/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

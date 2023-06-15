import {Link, Route, Routes} from 'react-router-dom'

import Create from './components/create'
import View from './components/view'
import Delete from './components/delete'
import Main from './components/main'

function App() {
  return (
    <div>
      <h2>Event finder</h2>
      <Link to='/main'>Go Home</Link>
      <Link to='/create'>Create an Event</Link>
      <Link to='/view'>Find an Event</Link>
      <Link to='/delete'>Delete an Event</Link>
      <hr/>

      <Routes>
      <Route path='/main' element={<Main/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/view' element={<View/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

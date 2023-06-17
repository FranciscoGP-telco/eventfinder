import {Link, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'

import { initializeEvents } from './reducers/eventReducer'
import { useDispatch } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'


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
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <Link to="/main">Home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/create">Create an Event</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/find">Find an Event</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/delete">Delete an Event</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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

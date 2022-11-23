import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/people'>People</Link>
        <Link to='/rq-people'>RQ-People</Link>
        <Link to='/paginated-people'>RQ-People-Paginated</Link>
        <Link to='/rq-live-people'>RQ-Live-People</Link>
      </nav>
    </div>
  )
}

export default Navbar
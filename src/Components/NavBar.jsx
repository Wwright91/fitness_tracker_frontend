import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>NavBar
      <button>
        <Link to="/workouts/new">New Workout</Link>
        </button>
    </div>
  )
}

export default NavBar
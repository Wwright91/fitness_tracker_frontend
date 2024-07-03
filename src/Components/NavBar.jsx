import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/workouts">Index</Link>
      <button>
        <Link to="/workouts/new">New Workout</Link>
        </button>
    </div>
  )
}

export default NavBar
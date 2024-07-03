import React from 'react'
import { Link } from 'react-router-dom'

const Workout = ({workout}) => {
  return (
    <div>
      <Link to={`/workouts/${workout.id}`}>{workout.type}</Link>
    </div>
  )
}

export default Workout
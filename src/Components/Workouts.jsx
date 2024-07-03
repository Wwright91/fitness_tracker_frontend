import React from 'react'
import { useState, useEffect } from 'react'
import Workout from './Workout'

const API = import.meta.env.VITE_API_URL

const Workouts = () => {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    fetch(`${API}/workouts`)
      .then((res) => {
      return res.json()
      })
      .then(resJSON => {
        console.log(resJSON)
        setWorkouts(resJSON)
      })
    .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>Workouts</h1>
      {workouts.map(workout => {
        return <Workout key={workout.id} workout={workout} />
})}
    </div>
  )
}

export default Workouts
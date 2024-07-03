import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"

const API = import.meta.env.VITE_API_URL

const WorkoutEditForm = () => {
  const [workout, setWorkoutDetails] = useState({ type: "", durationInMinutes: 0, caloriesBurned: 0, date: "" })
  let navigate = useNavigate()
  let {id} = useParams()
  
  const handleTextChange = (event) => {
    setWorkoutDetails({...workout, [event.target.id]: event.target.value})
  }

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then((res) => {
      return res.json()
      })
      .then((resJSON) => {
      setWorkoutDetails(resJSON)
      })
      .catch((error) => {
      console.error(error)
    })

  }, [id])

  const updateWorkout = () => {
    fetch(`${API}/workouts/${id}`, {
      method: "PUT",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
      navigate("/workouts")
      })
    .catch((error) => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateWorkout()
    setWorkoutDetails({type: "", durationInMinutes: 0, caloriesBurned: 0, date: ""})
  }

  return (
    <div>WorkoutEditForm
      <form onSubmit={handleSubmit}>
        <label htmlFor='type'>Type:</label>
        <input id='type' type='text' value={workout.type} required onChange={handleTextChange}/>
        <label htmlFor='durationInMinutes'>Duration</label>
        <input id='durationInMinutes' type='number' value={workout.durationInMinutes} required onChange={handleTextChange}/>
        <label htmlFor='caloriesBurned'>Calories Burned</label>
        <input id='caloriesBurned' type='number' value={workout.caloriesBurned} required onChange={handleTextChange} />
        <label htmlFor='date'>Date</label>
        <input id='date' type='text' value={workout.date} required onChange={handleTextChange} />
        <button>Submit</button>
      </form>
      </div>
  )
}

export default WorkoutEditForm
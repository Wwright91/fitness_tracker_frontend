import React, { useState } from 'react'

const WorkoutNewForm = () => {
  const [workout, setWorkoutDetails] = useState({})
  return (
    <div>WorkoutNewForm
      <form>
        <label>Type:</label>
        <input id='type' type='text' value={workout.type} required/>
        <label>Duration</label>
        <input id='duration' type='number' value={workout.durationInMinutes} required/>
        <label>Calories Burned</label>
        <input id='caloriesBurned' type='number' value={workout.caloriesBurned} required />
        <label>Date</label>
        <input id='date' type='text' value={workout.date} required />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default WorkoutNewForm
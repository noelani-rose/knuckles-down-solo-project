import { useDispatch, useSelector } from 'react-redux'


function Exercises () {
    const exercises = useSelector(store => store.exercises)
    console.log('exercises are', exercises)
    console.log('exercsises at this day', exercises[0].exercises[0].name)


    return (
        <div>
            {exercises.map(exercise => (
                <div key = {exercise.id}>{exercise.exercises.name}</div>
            ))}
       </div>
    )
}

export default Exercises;
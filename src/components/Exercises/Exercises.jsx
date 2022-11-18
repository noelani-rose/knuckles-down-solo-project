import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Exercises () {
    const dispatch = useDispatch()
    const params = useParams()
    const exercises = useSelector(store => store.exercises)
    console.log('exercises are', exercises.exercises)
    // console.log('exercsises at this day', exercises[0].exercises[0].name)




    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_EXERCISES',
            payload: {
                programId: 1,
                weekId: 2,
                dayId: 4
            }
        })
    }, [])

    if (exercises.exercises == undefined){
        exercises.exercises = []
    }

    return (
        <div>
            {exercises.exercises.map(exercise => (
                <div key = {exercise.id}>{exercise.name} - {exercise.rep_scheme} - {exercise.notes}</div>          
            ))}
       </div>
    )
}

export default Exercises;
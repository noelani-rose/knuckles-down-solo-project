import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExercisesItems from '../ExercisesItems/ExercisesItems'



function Exercises () {
    const dispatch = useDispatch()
    const params = useParams()
    const exercises = useSelector(store => store.exercises)
    const programName = useSelector(store => store.currentProgram[0].name)
    console.log('am i getting exercises baack on EXERCISES PAGE???', exercises)

    useEffect(() => {
        console.log('in use Effect on exercises pages')
        dispatch({
            type: 'FETCH_PROGRAM_EXERCISES',
            payload: {
                programId: params.programId,
                weekId: params.weekId,
                dayId: params.dayId
            }
        })
    }, [params.programId, params.weekId, params.dayId])

     return (
        <>
            <h1>Current Program: {programName}</h1>
            <h4>Week: {params.weekId}</h4>
            <h4>Day: {params.dayId}</h4>
            <ExercisesItems />
  
    </>
     )
}

export default Exercises;
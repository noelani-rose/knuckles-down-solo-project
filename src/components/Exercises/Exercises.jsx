import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExercisesItems from '../ExercisesItems/ExercisesItems'

function Exercises () {
    const dispatch = useDispatch()
    const params = useParams()
    const currentProgram = useSelector(({currentProgram}) => currentProgram.currentProgram)
    const loading = useSelector(({currentProgram}) => currentProgram.loading)

    useEffect(() => {
        if (!currentProgram){
            dispatch({
                type: 'FETCH_USER_PROGRAM'  
            });
        }
    }, [currentProgram]);


     return (
        <>
            {loading || !currentProgram ? (
                <h1>Loading...</h1>
            ): (
                <>
                    <h1>Current Program: {currentProgram.name}</h1>
                    <h4>Week: {params.weekId}</h4>
                    <h4>Day: {params.dayId}</h4>
                    <ExercisesItems programName = {currentProgram.name}/>
                </>
            )}
        </>
     )
}

export default Exercises;
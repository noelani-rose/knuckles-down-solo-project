import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function MyProgramDayItem () {
    const params = useParams()
    const dispatch = useDispatch()
    let days = useSelector(store => store.day)
    // days = days[days.length -1]
    console.log('what is week id params on DAY PAGE', params.weekId)
    console.log('what is program id params on DAY PAGE', params.programId)
//     exercises = exercises[exercises.length -1].exercises;


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_DAYS', 
            payload: {
                programId: params.programId,
                weekId: params.weekId
            }
        })
    }, [params.programId, params.weekId])

    return (
        <>
            {days.map(day => (
                <Link id="RouterNavLink" to = 
                {`/program/${params.programId}/week/${params.weekId}/day/` + day.day} key = {day.day}>
                <div>{day.day}</div>
                </Link>
            ))}
        </>
    )
}

export default MyProgramDayItem;
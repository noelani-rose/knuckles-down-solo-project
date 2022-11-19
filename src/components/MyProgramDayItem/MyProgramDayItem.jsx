import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function MyProgramDayItem () {
    const params = useParams()
    const dispatch = useDispatch()
    const days = useSelector(store => store.userProgram)
    const weeks = useSelector(store => store.userProgram)
    console.log('what is week id params on DAY PAGE', params.weekId)
    console.log('what is program id params on DAY PAGE', params.programId)


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_DAYS', 
            payload: {
                programId: params.programId,
                weekId: params.weekId
            }
        })
    }, [params.programId, params.weekId])
    // took out params.programId

    return (
        <>
            {days.map(day => (
                <Link id="RouterNavLink" to = {`/program/${params.programId}/week/${params.weekId}/day/` + day.day + `/exercises`} key = {day.id}><br/>
                <div>{day.day}</div>
                </Link>
            ))}
        </>
    )
}

export default MyProgramDayItem;
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function MyProgramDayItem () {
    const params = useParams()
    const dispatch = useDispatch()
    const days = useSelector(store => store.userProgram)
    console.log('what is in the store for my days', days)

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_DAYS', 
            payload: params.id
        })
    }, [params.id])


    return (
        <>
            {days.map(day => (
                <Link id="RouterNavLink" to = {'/day/' + day.day} key = {day.day}><br/>
                {day.day}<br/>
                </Link>
            ))}
        </>
    )
}

export default MyProgramDayItem;
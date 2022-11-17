import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


function MyProgramDayItem () {
    const dispatch = useDispatch()
    const days = useSelector(store => store.userProgram)
    console.log('what is in the store for my days', days)

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_DAYS'
        })
    }, [])


    return (
        <div>
            <Link id="RouterNavLink" to = '/exercises'>
                {/* {days.map(day => (
                    <div key = {day.exercises.id}>{day.day}</div>
                ))} */}
            </Link><br/>
        </div>
    )
}

export default MyProgramDayItem;
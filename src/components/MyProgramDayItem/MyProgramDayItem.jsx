import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


function MyProgramDayItem () {
    const days = useSelector(store => store.user)
    console.log('what is in the store', days)

    


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
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


function MyProgramDayItem () {
    const days = useSelector(store => store.exercises)



    return (
        <div>
            <Link id="RouterNavLink" to = '/exercises'>
                {days.map(day => (
                    <div key = {day.id}>{day.day}</div>
                ))}
            </Link><br/>
        </div>
    )
}

export default MyProgramDayItem;
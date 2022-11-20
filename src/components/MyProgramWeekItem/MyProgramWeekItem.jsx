import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MyProgramWeekItem() {
    const dispatch = useDispatch();
    const weeks = useSelector(store => store.week)
    const currentProgramId = useSelector(store => store.currentProgram)
    const programId = currentProgramId[0].programs_id


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAM_WEEKS',
            payload: programId
        })
    }, [programId])


    return(
        <>
            {weeks.map(week => (
                <Link id="RouterNavLink" to={`/program/${programId}/week/` + week.week} key = {week.week} >        
                {week.week}<br/>
                </Link>
            ))}
    
                
        </>
    )

}

export default MyProgramWeekItem
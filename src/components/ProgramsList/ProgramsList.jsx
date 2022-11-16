import ProgramListItem from "../ProgramListItem/ProgramListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

function ProgramsList () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_PROGRAMS'
        })
    }, [])



    return (
         <div>
             Program List...
            <ProgramListItem />
            <button>Select</button>
        </div>
 
    )
}

export default ProgramsList; 
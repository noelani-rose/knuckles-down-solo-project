
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import JournalEntry from "../JournalEntry/JournalEntry"


function Journal () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOURNAL_ENTRIES'
        })
    }, [])

    return(
        <div>
            Journal...
            <JournalEntry />
        </div>
    )
}


export default Journal
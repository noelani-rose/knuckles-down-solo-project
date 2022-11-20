import { useSelector } from "react-redux"


function JournalEntry () {
    const entries = useSelector(store => store.journal)

    return (
        <div>
            <ul>
                {entries.map(entry => (
                    <li>Entry for week {entry.week}, day {entry.day} of {entry.name}: <br/>
                    {entry.entry}
                    </li>
                ))}

            </ul>
            Journal Entires
        </div>
    )
}

export default JournalEntry;
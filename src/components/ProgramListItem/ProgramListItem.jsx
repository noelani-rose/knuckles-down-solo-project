import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'



function ProgramListItem () {
    const programs = useSelector(store => store.program)
    



    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Days per Week</th>
                    <th>Intensity</th>
                    <th>Volume</th>
                    <th>Good For</th>
                </tr>
            </thead>
            <tbody>
                {programs.map(program => (
                    <tr key = {program.id}>
                        <td>{program.name}</td>
                        <td>{program.days_per_week}</td>
                        <td>{program.intensity}</td>
                        <td>{program.volume}</td>
                        <td>{program.good_for}</td>
                    </tr>
                ))}
            </tbody>
        </table>                
        </>
    )
}

export default ProgramListItem
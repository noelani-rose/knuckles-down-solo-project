import { useSelector } from "react-redux"
import { useState } from "react";
import CheckSkipBox from "../CheckBox/CheckBox";


function ExercisesItems () {
    let exercises = useSelector(store => store.exercises)

    // console.log('exercises ARE on items page', exercises[exercises.length -1].exercises[0].name)
    console.log(' exercises Are on items page,', exercises)
    if (exercises == []){
        return(
            <div>Loading...</div>
        )
    }
    else {
    return(
        <>
        <ul>
            {exercises[0].exercises.map(exercise => (
                <li key = {exercise.id}>
                    {exercise.name}: <br/>
                    {exercise.rep_scheme} <br/>
                    Notes: {exercise.notes}
                    </li>
            ))}
        </ul>
        </>
            )
        }
}
        
        export default ExercisesItems
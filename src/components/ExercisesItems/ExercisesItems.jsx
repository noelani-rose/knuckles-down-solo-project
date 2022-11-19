import { useSelector } from "react-redux"
import { useState } from "react";
import CheckSkipBox from "../CheckBox/CheckBox";


function ExercisesItems () {
    const exercises = useSelector(store => store.exercises)
    
    

    
    
    return(
        <>
        <ul>
        {exercises[0].exercises.map(exercise => (
            <li key = {exercise.id}>
                {exercise.name} - 
                {exercise.rep_scheme} - 
                {exercise.notes}
                <CheckSkipBox exercises = {exercises}/>
            </li>          
            ))}      
            </ul>
            </>
            )
        }
        
        export default ExercisesItems
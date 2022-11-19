import { useSelector } from "react-redux"
import { useState } from "react";
import CheckSkipBox from "../CheckBox/CheckBox";


function ExercisesItems () {
    const [checked, setChecked] = useState(false);
    const exercises = useSelector(store => store.exercises)
    
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log('checked', checked)
    };
    
    
    return(
        <>
        <ul>
        {exercises[0].exercises.map(exercise => (
            <li key = {exercise.id}>
                {exercise.name} - 
                {exercise.rep_scheme} - 
                {exercise.notes}
                <CheckSkipBox exercises = {exercises[0]}/>
            </li>          
            ))}      
            </ul>
            </>
            )
        }
        
        export default ExercisesItems
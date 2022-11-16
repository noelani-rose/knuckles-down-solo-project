import { Link } from 'react-router-dom';


function MyProgramDayItem () {
    return (
        <div>
            <Link id="RouterNavLink" to = '/exercises'>Day 1</Link><br/>
            <Link id="RouterNavLink" to = '/exercises'>Day 2</Link><br/>
            <Link id="RouterNavLink" to = '/exercises'>Day 3</Link><br/>
        </div>
    )
}

export default MyProgramDayItem;
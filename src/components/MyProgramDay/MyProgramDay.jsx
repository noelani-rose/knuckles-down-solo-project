import { useSelector } from 'react-redux';

  import MyProgramDayItem from '../MyProgramDayItem/MyProgramDayItem';

function MyProgramDay () {
    const programName = useSelector(store => store.currentProgram[0].name)
    return (
        <div>
            <h1>Current Program: {programName}</h1>
            Here are the list of days 

            {/* <Link id="RouterNavLink" to = '/exercises'> */}
                <MyProgramDayItem />
            {/* </Link> */}
        </div>
    )
}

export default MyProgramDay;
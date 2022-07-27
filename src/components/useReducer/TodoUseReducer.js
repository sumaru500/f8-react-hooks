import {useReducer, useRef} from 'react'


// NOTES
// useReducer is used instead of useState for complex data 

// give an initial state
const initialState =  {
    job: '',
    jobs: []
}

// define actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const REMOVE_JOB = 'remove_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const removeJob = payload => {
    return {
        type: REMOVE_JOB,
        payload
    }
}

// define a reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            };
            
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case REMOVE_JOB:
            let newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action: ' + action)
    }
}

const logger = (reducer) => {
    return (state, action) => {
        console.group(action.type)
        console.log('prevState: ', state)
        console.log('action: ',action)
        let newState = reducer(state, action)
        console.log('nextState: ', newState)
        console.groupEnd()
        return newState
    }
}

function TodoUseReducer() {

    const [state, dispatch] = useReducer(logger(reducer), initialState);
    const {job, jobs} = state;

    const jobRef = useRef();

    const handleAdd = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));

        // set forcus
        jobRef.current.focus()
    }

    return ( 
        <div>
            <h1> Use Reducer - Demo with Todo List </h1>
            <input
                ref={jobRef}
                placeholder='Enter a job'
                value={job}
                onChange={(event) => dispatch(setJob(event.target.value))} 
            />
            <button
                onClick={handleAdd}
            >
                Add
            </button>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job} 
                        <span
                            onClick={() => dispatch(removeJob(index))}
                        >
                            &times;
                        </span></li>
                    ))
                }
            </ul>
        </div>
     );
}

export default TodoUseReducer;
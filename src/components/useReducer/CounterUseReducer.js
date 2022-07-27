import {useReducer} from 'react'


// NOTES
// useReducer is used instead of useState for complex data 

// give an initial state
const initialState = 0

// define actions
const DOWN_ACTION = 'down'
const UP_ACTION = 'up'

// define a reducer function
const reducer = (state, action) => {
    console.log('reducer is running')
    switch (action) {
        case DOWN_ACTION:
            return state - 1;
            
        case UP_ACTION:
            return state + 1;

        default:
            throw new Error('Invalid action: ' + action)
    }
}

function CounterUseReducer() {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return ( 
        <div>
            <h1> Use Reducer - Demo with Counter problem </h1>
            <h2>{counter}</h2>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </div>
     );
}

export default CounterUseReducer;
import { useState } from "react";

function TodoListUseState() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        // load jobs localStorage
        const restoredJobs = JSON.parse(localStorage.getItem('Todo'));
        return restoredJobs ?? []
    })
    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];
            // save to local storage
            localStorage.setItem('Todo', JSON.stringify(newJobs));
            return [...prev, job];
        })

        setJob(''); // to clear but must useRef later
    }
    const handleClearAll = () => {
        localStorage.removeItem('Todo')
        setJobs([]);
    }

    return (

        <div>
        <h1>Todo List Use State</h1>
        <input
            value={job}
            onChange={(event) => setJob(event.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
            {jobs.map((elem, index) => (
                <li key={index}>
                    {elem}
                </li>
            ))}
        </ul>
        <button onClick={handleClearAll}>Clear All</button>
        </div>
     );
}

export default TodoListUseState;
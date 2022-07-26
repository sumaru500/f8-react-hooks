import { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JS'
    },
]

const languages = [
    {
        id: 1,
        name: 'EN'
    },
    {
        id: 2,
        name: 'FR'
    },
    {
        id: 3,
        name: 'VI'
    },
]

function TwoWayBindingUseState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkedCourse, setCheckedCourse] = useState(2);
  const [checkedLanguages, setCheckedLanguages] = useState([]);
  
  const handleCheckedLanguages = (langId) => {
    setCheckedLanguages(prevState => {
        const isIncluded = prevState.includes(langId);

        if (isIncluded) {
            // eliminate
            return prevState.filter(id => id !== langId)
        }
        else {
            // add
           return [...prevState, langId];
        }

    })
  }
  
  const handleSubmit = () => {
    console.log({
        name, 
        email,
        course: courses[checkedCourse],
        languages: checkedLanguages
    })
  };
  console.log(name);
  return (
    <div>
      <h1>Two way binding</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {courses.map(course => (
                    <div key={course.id}>
                        <input 
                            type='radio'
                            checked={course.id === checkedCourse}
                            onChange={() => setCheckedCourse(course.id)}
                        />
                        {course.name}
                    </div>
                )
            )
        }

        {languages.map(lang => (
                    <div key={lang.id}>
                        <input 
                            type='checkbox'
                            checked={checkedLanguages.includes(lang.id)}
                            onChange={() => handleCheckedLanguages(lang.id)}
                        />
                        {lang.name}
                    </div>
                )
            )
        }
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default TwoWayBindingUseState;

import {useEffect, useState} from 'react'

// 1. useEffect(callback)
// - callback is also called each time component re-rendered 
// - callback is called only after component added into dom
// 1. useEffect(callback, [])
// - callback is called only once when component mounted
// 1. useEffect(callback, [deps])
// - callback is called only once when deps(a variable, eg. prop, state) has changed

// NOTES
// 1. useEffect: callback is always called after component mounted
// 2. useEffect: cleanup function is always called before component unmounted
// 3. useEffect: cleanup function is always called before callback called (except the first time)

// API test: https://jsonplaceholder.typicode.com/todos

const tabs = ["posts", "comments", "albums"]

function ContentUseEffect() {

    // dom content
    const [title, setTitle] = useState('')
    
    // component content
    const [contents, setContents] = useState([])
    const [contentType, setContentType] = useState(tabs[0])

    // dom event
    const [showGoUp, setShowGoUp] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)

    // timer event
    const [countDown, setCountDown] = useState(180)


    // dom content
    useEffect(() => {
        console.log('Mounted', title);
        document.title = title
    }, [title])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
        .then(resp => resp.json())
        .then(returnedContents => {
            setContents(returnedContents)
        })
    }, [contentType]);

    // DOM events
    // scroll event
    useEffect(() => {
        const handleScroll = () => {
            setShowGoUp(window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)

        // clean function to avoid memory leak when component unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // resize event
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // clean function to avoid memory leak when component unmounted
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // timer event
    // useEffect(() => {
    //     let timerId = setInterval(() => setCountDown(prev => prev - 1), 1000)

    //     // avoid memory leek by return clear function
    //     return () => {
    //         clearInterval(timerId)
    //     }
    // }, [])
    useEffect(() => {
        let timerId = setTimeout(() => setCountDown(countDown - 1), 1000)

        // avoid memory leek by return clear function
        return () => {
            clearTimeout(timerId)
        }
    }, [countDown])

    return ( 
        <div>
            <h1> Use Effect - Window Width = {width} px </h1>
            <h1> Use Effect - Chrono : {countDown}</h1>
            <input 
                value={title}
                onChange={(event => setTitle(event.target.value))}
            />
            {tabs.map((tab, i) =>(
                <button
                    key={tab}
                    style={contentType === tab ? {backgroundColor: '#aaa'} : {}}
                    onClick={() => setContentType(tab)}
                >{tab}</button>
            ))}
            <ul>
                {contents.map((content) => (
                    <li key={content.id}>{content.title || content.name}</li>
                ))}
            </ul>
            {showGoUp && 
                <button
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px'

                    }}
                >
                    Go to Up
                </button>
            }
        </div>
     );
}

export default ContentUseEffect;
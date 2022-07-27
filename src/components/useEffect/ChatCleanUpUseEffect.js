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

const topics = [
    { 
        id: 1, 
        name: 'Javascript'
    },
    { 
        id: 2, 
        name: 'HTML, CSS'
    },
    { 
        id: 3, 
        name: 'Python'
    },
]

function emitMessage(topicId) {  
    return setInterval(() => {
        window.dispatchEvent(new CustomEvent(`topic-${topicId}`, {
            detail: `Message from channel ${topicId}`
        }))
    }, 2000)
} 

function ChatCleanUpUseEffect() {

    // current topic
    const [currTopicId, setCurrTopicId] = useState(topics[0].id)
    
    // fake mesasges send from window custom event
    useEffect(() => {
        // emit message by interval
        let timerIds = topics.map(topic => emitMessage(topic.id)
        )

        // clean fake messages
        return () => {
            timerIds.map(timerId => (
                clearInterval(timerId)
            ))
        }
    }, [])

    // listen custom event on topic
    useEffect(() => {
        const receiveMessage = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`topic-${currTopicId}`, receiveMessage)

        // clean up subcribe topic channel
        return () => {
            // currTopicId here is the previous value
            window.removeEventListener(`topic-${currTopicId}`, receiveMessage)
        }
    }, [currTopicId])


    const handleSelectTopic = (topicId) => {
        setCurrTopicId(topicId);
    }
 
    return ( 
        <div>
            <h1> Use Effect - Chat Clean Up subcribe channel </h1>
            <ul>
                {topics.map(topic =>(
                    <li key={topic.id}
                        style={currTopicId === topic.id ? {color: '#249', fontSize: '20px'} : {}}
                        onClick={() => handleSelectTopic(topic.id)}
                    >{topic.name}</li>
                ))}
            </ul>
        </div>
     );
}

export default ChatCleanUpUseEffect;
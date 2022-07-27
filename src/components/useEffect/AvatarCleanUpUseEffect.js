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


function AvatarCleanUpUseEffect() {

    // avatar
    const [avatar, setAvatar] = useState()
    
    // dom content
    useEffect(() => {
        
        // clean up url for avatar
        return () => {
            URL.revokeObjectURL(avatar?.url)
        }
    }, [avatar])


    const handleAvatar = (event) => {
        const avatar = event.target.files[0];
        const avatarUrl = URL.createObjectURL(avatar) 
        avatar.url = avatarUrl;
        setAvatar(avatar)
        
        // tric: to select twice the same image
        event.target = null;
    }
 
    return ( 
        <div>
            <h1> Use Effect - Avatar Clean Up tempo URL </h1>
            <input
                type='file'
                multiple
                onChange={handleAvatar}
            />
            {avatar && <img src={avatar.url} alt='avatar'/>}
        </div>
     );
}

export default AvatarCleanUpUseEffect;

import React, { useEffect, useState } from 'react'

export const useClick = () => {
 
    const [btnState, setBtnState] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = ()=>{
        setBtnState(btnState => !btnState);
        setIsToggled(prevState => !prevState);
    }

    useEffect(()=>{
        document.body.style.overflowY = isToggled ? 'hidden' : 'auto'
    },[isToggled])

    return{

        btnState,
        handleClick

    }

}

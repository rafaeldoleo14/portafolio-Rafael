
import React, { useEffect, useState } from 'react'

export const useClick = () => {
 
    const [btnState, setBtnState] = useState(false);

    const handleClick = ()=>{
        setBtnState(btnState => !btnState);
        setIsToggled(prevState => !prevState);
    }

    return{

        btnState,
        handleClick

    }

}


import { Grid } from '@mui/material'
import Aos from 'aos';
import React, { useEffect } from 'react'

export const ItemsSkill = ({id, icon}) => {

    useEffect(()=>{
      Aos.init({duration: 3000});
  },[])

  return (
    
    <>
    
        <Grid data-aos="zoom-in-up" className='icon-container' sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px'
                }}>

            {icon}
            <p className='skill-name'>{id}</p>

        </Grid>
    
    </>

  )
}

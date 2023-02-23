
import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { skills } from '../data/skills';
import '../../../public/style/skillsStyle.css'
import { ItemsSkill } from './ItemsSkill';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    
  return (
    <>

            <Grid id={'skills'} data-aos="fade-right"
            sx={{
                marginBottom: '50px',
                display: 'flex',
                flexDirection: 'Column',
                gap: {
                    xs: '30px',
                    sm: '40px',
                    md: '50px'
                }, 
                px: {
                    xs: '30px',
                    sm: '50px',
                    md: '60px',
                    lg: '70px',
                }
            }}
        >


                <Typography data-aos="zoom-in" component='h1'
                className='skill-title'
                sx={{fontSize: {
                            xs: '28px', 
                            sm: '28px', 
                            md: '29px', 
                            lg: '35px',
                        },
                        gridColumn: '1/7',
                        alignItems: 'end'
                }}
                >
                    Habilidades
                </Typography>

                <Grid
                sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                placeItems: 'center',
                gap: {
                    xs: '30px',
                    sm: '40px',
                    md: '50px'
                }, 
                px: {
                    xs: '30px',
                    sm: '50px',
                    md: '60px',
                    lg: '70px',
                }
            }}
        >

                

            {
                skills.map((items)=>(

                    <ItemsSkill key={items.id} {...items}/>

                ))
            }

        </Grid>


        </Grid>

                
    
        
    
    </>
  )
}

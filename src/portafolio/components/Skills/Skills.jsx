
import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { skills } from '../../data/skills';
import './Skills.css'
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
                height: {
                    xs: 'auto',
                    md: '100vh'
                },
                display: 'flex',
                flexDirection: 'Column',
                justifyContent: 'center',
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
                }}
                >
                    Habilidades
                </Typography>

                <Grid
                sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(auto-fill, minmax(85px, 1fr))',
                    sm: 'repeat(auto-fill, minmax(120px, 1fr))',
                },
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


import { Grid, Typography } from '@mui/material'
import Aos from 'aos';
import React, { useEffect } from 'react';
import './Projects.css';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])


  return (
    <>
    
        <Grid id={'projects'} data-aos="fade-right"
                sx={{
                    marginBottom: '50px',
                    height: {
                        xs: 'auto',
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
                    },
                    py: '3em'
                }}
            >

                <Typography data-aos="zoom-in" component='h1'
                className='project-title'
                sx={{fontSize: {
                            xs: '28px', 
                            sm: '28px', 
                            md: '29px', 
                            lg: '35px',
                        },
                }}
                >
                    Proyectos
                </Typography>

                <Grid sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(270px, 1fr))',
                        sm: 'repeat(auto-fill, minmax(300px, 1fr))'
                    },
                    placeItems: 'center',
                    gap: {
                        xs: '30px',
                        sm: '40px',
                        md: '50px'
                    }, 
                }}>

                    {
                        projects.map((item)=> (
                            <ProjectCard key={item.id} {...item}/>
                        ))
                    }

                </Grid>


        </Grid>   
    
    </>
  )
}

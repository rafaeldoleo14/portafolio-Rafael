
import {  Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ProjectCard = ({title, img, skillUsed, link}) => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <>
        
            <Card data-aos="flip-up"  data-aos-duration="500" 
                className='card' sx={
                    { maxWidth: {
                        xs: '270px',
                        sm: '345px'
                    }, 
                    backgroundColor: '#111827'}}>

                <Link  to={link} 
                target="_blank" rel="noopener noreferrer">

                <CardMedia
                    sx={{ height: 200, width: {xs: '270px', sm: '345px'}, backgroundSize: 'cover'}}
                    image={img}
                    title={title}
                />

                <CardContent 
                    sx={{backgroundColor: '#1b2335', 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'}}>

                    <Typography gutterBottom variant="p" component="div" className='project-item-title'>
                        {title}
                    </Typography>

                    <Grid>

                        <ul className='project-ul'>
                            {skillUsed.map((skill, id) => (
                            <li key={id}>{skill}</li>
                            ))}
                        </ul>

                    </Grid>
                    
                </CardContent>

                {/* <CardActions>

                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>

                </CardActions> */}
                </Link>

            </Card>

    
    </>
  )
}

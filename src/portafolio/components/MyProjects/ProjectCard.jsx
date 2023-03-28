
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
        
        <Link data-aos="flip-up" target="_blank" to={link} className='card'>
            
                <img className='card-img' src={img} alt={title} />

                <div className='title-content'>

                    <h4 className='project-item-title'>{title}</h4>

                    <ul className='project-ul'>
                        {
                            skillUsed.map((item)=>(
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>

                </div>
            
        </Link>
    
    </>
  )
}

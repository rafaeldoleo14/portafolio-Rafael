
import React, { useEffect } from 'react';
import mainImage from '../../../assets/img/mainImage.png';
import './AboutMe.css'
import { Grid, ImageListItem, Typography } from '@mui/material';
import Aos from 'aos';
import { Links } from '../Links/Links';

export const AboutMe = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

  return (
    <>
    
        <Grid id='about' component='section'  
        sx={{
            marginTop:{
                xs: '110px',
                md: '0'
            },
            marginBottom: {
                xs: '50px',
                sm: '50px',
                md: '0px'
            },
            height: {
                xs: '0',
                sm: '0',
                md: '100vh'
            }, 
            display: 'flex',
            gap: {
                xs: '50px',
                sm: '55px',
                md: '80px'
            }, 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: {
                xs: 'column',
                md: 'row'
            },
            px: {
                xs: '30px',
                sm: '50px',
                md: '60px',
                lg: '70px',
            }}}
        >

            <Grid component={'div'} className='info animate__animated animate__fadeInLeftBig'
                sx={{Width: '60%'}}>

                <Typography component='h3'
                sx={{fontSize: {xs: '22px', sm: '22px', md: '26px', lg: '40px'}}}>Rafael Francisco</Typography>

                <Typography component='h1' 
                sx={{fontSize: {xs: '23px', sm: '28px', md: '26px', lg: '45px'}}}>Desarrollador <span>Frontend</span></Typography>

                <Typography component='p'
                sx={{ fontSize: {xs: '15px', sm: '14px', md: '18px'}}}>Soy un desarrollador web que se enfoca en 
                    la creación de aplicaciones web utilizando tecnologías modernas como React para el desarrollo 
                    frontend. Además, cuento con conocimientos en el backend y he trabajado en 
                    proyectos en equipo que me han permitido aplicar y consolidar estas habilidades.
                    </Typography>

                <Grid sx={{
                    gap: {
                        xs: '15px',
                        sm: '25px'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <button>Descargar CV</button>

                    <Links/>

                </Grid>

            </Grid>

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic" data-aos-duration="2000">

                    <ImageListItem sx={{width: {xs: '280px', sm: '300px', md: '400px',lg: '450px'}}}>
                        <img src={mainImage} alt="" />
                    </ImageListItem>

            </div>

        </Grid>
    
    </>
  )
}

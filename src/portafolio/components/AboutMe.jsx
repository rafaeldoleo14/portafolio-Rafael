
import React, { useEffect } from 'react';
import mainImage from '../../assets/img/mainImage.png';
import '../../../public/style/aboutMeStyle.css'
import { Grid, ImageListItem, Typography } from '@mui/material';
import Aos from 'aos';

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
                sx={{fontSize: {xs: '28px', sm: '28px', md: '25px', lg: '50px'}}}>Desarrollador <span>Frontend</span></Typography>

                <Typography component='p'
                sx={{ fontSize: {xs: '15px', sm: '14px', md: '18px'}}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Esse quam mollitia at aperiam? Exercitationem ullam mollitia praesentium repellendus similique dolorum commodi, 
                facere magnam molestiae vitae a at magni, ab quis.</Typography>

                <div>
                    <button>Descargar CV</button>
                    <i class="ri-github-fill"></i>
                    <i class="ri-linkedin-box-fill"></i>
                    <i class="ri-mail-line"></i>
                </div>

            </Grid>

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic" data-aos-duration="2000">

                    <ImageListItem sx={{width: {xs: '330px', sm: '300px', md: '400px',lg: '450px'}}}>
                        <img src={mainImage} alt="" />
                    </ImageListItem>

            </div>

        </Grid>
    
    </>
  )
}

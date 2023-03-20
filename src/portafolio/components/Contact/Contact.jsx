import { Grid, TextField, Typography } from '@mui/material'
import Aos from 'aos';
import React from 'react';
import { useEffect } from 'react';
import './Contact.css'

export const Contact = () => {

    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])

  return (
    <>

        <Grid id={'contact'} sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                }}>

                    <Typography data-aos="zoom-in" component='h1'
                    className='contact-title'
                    sx={{fontSize: {
                                xs: '28px', 
                                sm: '28px', 
                                md: '29px', 
                                lg: '35px',
                            },
                    }}
                    >
                        Contacto
                    </Typography>


                    <Grid data-aos="fade-right"
                        sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        backgroundColor: '#1b2335',
                        gap: '40px',
                        padding: {
                            xs: '40px',
                            sm: '50px'
                        },
                        borderRadius: '10px',
                        width: {
                            xs: '98%',
                            sm: '450px'
                        }
                    }}>

                        <form action="">
                                
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input id='name' type="text" name='Name' placeholder='Name'/>
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input id='email' type="text" name='email' placeholder='Mail'/>
                            </div>

                            <div>
                                <label htmlFor="message">Mensaje</label>
                                <textarea placeholder='Mensaje' name="message" id="message"/>
                            </div>

                            <div>
                                <button>Enviar Mensaje</button>
                            </div>

                        </form>

                        <Grid data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'row',
                                sm: 'column'
                            },
                            justifyContent: 'space-evenly',
                            gap: {
                                xs: '15px',
                                sm: '25px'
                            }
                        }}>
                            <i class="ri-github-fill"></i>
                            <i class="ri-linkedin-box-fill"></i>
                            <i class="ri-mail-line"></i>

                        </Grid>

                    </Grid>


        </Grid>
    
    </>
  )
}

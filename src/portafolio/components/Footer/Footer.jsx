
import { Chip, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import {BsCode, BsCodeSlash} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>

        <div className='icon-content'>

            <hr/>

                <div>
                    <BsCode size={25}/>
                    <BsCodeSlash size={25}/>
                </div>

            <hr />

        </div>

        <Typography sx={{fontSize: {
            xs: '0.6em',
            md: '0.8em',
        }}} 
        variant="body2">
        © {new Date().getFullYear()} Rafael Francisco. Todos los derechos reservados
        </Typography>

    </footer>
  )
}

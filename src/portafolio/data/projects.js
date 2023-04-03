
import criptoProject from '../../assets/img/projectsImg/criptoProject.png';
import fullSecurityProject from '../../assets/img/projectsImg/full security.jpg';
import weatherProject from '../../assets/img/projectsImg/appClima.png';
import todoListProject from '../../assets/img/projectsImg/todoListImg.png';
import netflixProject from '../../assets/img/projectsImg/netflixClonImg.png'

export const projects = [

    {
        id: 1,
        title: 'Netflix Clon',
        img: netflixProject,
        skillUsed: ['React', 'Firebase', 'Tailwind'],
        link: 'https://clon-rafael.netlify.app'
    },

    {
        id: 2,
        title: 'Cotizador de Criptomonedas',
        img: criptoProject,
        skillUsed: ['React', 'Typescript', 'CSS',],
        link: 'https://consultar-criptop-rafael.netlify.app/'
    },

    {
        id: 3,
        title: 'Full Security',
        img: fullSecurityProject,
        skillUsed: ['React', 'CSS',],
        link: 'https://full-security.netlify.app/'
    },

    {
        id: 4,
        title: 'Weather App',
        img: weatherProject,
        skillUsed: ['React', 'Typescript', 'Boostrap'],
        link: 'https://weather-rafael.netlify.app/'
    },

    {
        id: 5,
        title: 'Todo List',
        img: todoListProject,
        skillUsed: ['React', 'Typescript', 'Redux TK'],
        link: 'https://todoapp-rafael.netlify.app/'
    },

]
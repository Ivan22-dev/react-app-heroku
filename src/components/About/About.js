import YouTubeIcon from '@material-ui/icons/YouTube'
import Facebook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import picture from './za.jpg'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
       <img src={picture} className='responsive' alt=''></img>
       <br/>
      {name && (
        <h2>
           <span className='about__name'>{name}</span>
        </h2>
      )}

      {role && <h3 className='about__role'> {role}</h3>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
       

        {social && (
          <>
  
               <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <Facebook />
              </a>
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <Instagram />
              </a>
           
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <YouTubeIcon />
              </a>
          
          </>
        )}
      </div>
    </div>
  )
}

export default About

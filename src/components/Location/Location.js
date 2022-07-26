import { location } from '../../portfolio'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Contact.css'

const Location = () => {

  return (
    <section className='section contact center' id='location'>
      <h3 className='section__title'>naša adresa<LocationOnIcon/></h3>
      
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5782.969195505983!2d16.92086230919332!3d43.5547844986726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ac787c72593b3%3A0x584af498e5db2798!2sDomovinskog%20Rata%208%2C%2021244%2C%20Dobranje!5e0!3m2!1sen!2shr!4v1658854701251!5m2!1sen!2shr" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
   
    </section>
  )
}

export default Location

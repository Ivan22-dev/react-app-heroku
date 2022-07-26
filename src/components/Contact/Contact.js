import { contact } from '../../portfolio'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Kontakt<PhoneEnabledIcon/></h2>
     
        <div class="col-md-5 d-flex align-items-stretch">
<div class="info-wrap bg-primary w-100 p-lg-5 p-4">
<div class="dbox w-100 d-flex align-items-start">
<div class="icon d-flex align-items-center justify-content-center">
<span class="fa fa-map-marker"></span>
</div>
<div class="text pl-3">
<p><span>Adresa:</span> DOMOVINSKOG RATA 8, DOBRANJE</p>
</div>
</div>
<div class="dbox w-100 d-flex align-items-center">
<div class="icon d-flex align-items-center justify-content-center">
<span class="fa fa-phone"></span>
</div>
<div class="text pl-3">
<p><span>Mobitel:</span> <a href="">+ 385 99 699 263 8</a></p>
</div>
</div></div>
</div>
    </section>
  )
}

export default Contact

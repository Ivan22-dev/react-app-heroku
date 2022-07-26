import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import picture from './cuba.png'
const Header = () => {
  const { homepage, title } = header

  return (
        <header className='header center'>
      <img src={picture} alt=''></img>
      <Navbar />
    </header>
  )
}

export default Header

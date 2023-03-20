import './Navbar.css';
import {Link} from 'react-router-dom'
export const Navbar =() =>{
    return(
    <nav className='home'>
      
      <Link to ='https://www.linkedin.com/in/dhinesh-kumar-s-55402a1b2/' target={'_blank'}><img src="/image/white-linkedin.svg" alt='linkedin_image' ></img></Link>
      <Link className="button" to='/'>Home</Link>
      <Link className="button" to='/Awards-and-Achievements'>Awards</Link>
    </nav>
  )

}
import styles from './AppNav.module.css'
import {NavLink } from 'react-router-dom'
// css modules, create a link to a css file, then use curly braces to select the className
function AppNav() {

   return(
      <nav className={styles.nav}>
      
   <ul>
    <li><NavLink to="cities">Cities</NavLink></li>
    <li><NavLink to='countries'></NavLink></li>
    <li></li>
    </ul>
      
      
      </nav>
      )


}

export default AppNav
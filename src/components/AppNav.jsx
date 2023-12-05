import styles from './AppNav.module.css'
// css modules, create a link to a css file, then use curly braces to select the className
function AppNav() {

   return(
      <nav className={styles.nav}>AppNav</nav>
      )

}

export default AppNav
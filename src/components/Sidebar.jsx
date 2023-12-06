import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"
import { Outlet } from "react-router-dom"

function Sidebar() {

   return (
      <div className={styles.sidebar}>
            <Logo/>

          
          <Outlet />

            <footer className={styles.footer}>
               <div className={styles.copyright}>
                  &copy; Copyright {new Date().getFullYear()}
                  by WorldWise Inc.
               </div>
            </footer>
      </div>
      )

}

export default Sidebar


import styles from './nav.module.scss'
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.Nav}>
        <NavLink to="/quotes">
          <div className={styles.Nav__item}>
            <div className={styles.Nav__itemIcon}>Icon</div>
            <div className={styles.Nav__itemText}>Quotes</div>
          </div>
        </NavLink>
        <NavLink to="/projects">
          <div className={styles.Nav__item}>
            <div className={styles.Nav__itemIcon}>Icon</div>
            <div className={styles.Nav__itemText}>Projects</div>
          </div>
        </NavLink>
    </div>
  )
}

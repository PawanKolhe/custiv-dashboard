import styles from './sidebar.module.scss'
import logo from '../../images/logo-white.png'
import Nav from '../Nav/Nav'

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__logo}>
        <img src={logo} alt="Logo" />
      </div>

      <Nav />
    </div>
  )
}

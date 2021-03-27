import styles from './nav.module.scss'
import { NavLink } from "react-router-dom";
import { InlineIcon } from '@iconify/react-with-api';

export default function Nav() {
  return (
    <div className={styles.Nav}>
        <NavLink to="/quotes" className={styles.Nav__item} activeClassName={styles.Nav__itemActive}>
          <div className={styles.Nav__itemIcon}>
            <InlineIcon icon="ph:note" className={styles.Nav__itemIconInactive} />
            <InlineIcon icon="ph:note-fill" className={styles.Nav__itemIconActive} />
          </div>
          <div className={styles.Nav__itemText}>Quotes</div>
        </NavLink>
        <NavLink to="/projects" className={styles.Nav__item} activeClassName={styles.Nav__itemActive}>
          <div className={styles.Nav__itemIcon}>
            <InlineIcon icon="ph:package" className={styles.Nav__itemIconInactive} />
            <InlineIcon icon="ph:package-fill" className={styles.Nav__itemIconActive} />
          </div>
          <div className={styles.Nav__itemText}>Projects</div>
        </NavLink>
        <NavLink to="/messages" className={styles.Nav__item} activeClassName={styles.Nav__itemActive}>
          <div className={styles.Nav__itemIcon}>
            <InlineIcon icon="ph:chat-centered-dots" className={styles.Nav__itemIconInactive} />
            <InlineIcon icon="ph:chat-centered-dots-fill" className={styles.Nav__itemIconActive} />
          </div>
          <div className={styles.Nav__itemText}>Messages</div>
        </NavLink>
        <NavLink to="/suppliers" className={styles.Nav__item} activeClassName={styles.Nav__itemActive}>
          <div className={styles.Nav__itemIcon}>
            <InlineIcon icon="ph:truck" className={styles.Nav__itemIconInactive} />
            <InlineIcon icon="ph:truck-fill" className={styles.Nav__itemIconActive} />
          </div>
          <div className={styles.Nav__itemText}>Suppliers</div>
        </NavLink>
        <NavLink to="/clients" className={styles.Nav__item} activeClassName={styles.Nav__itemActive}>
          <div className={styles.Nav__itemIcon}>
            <InlineIcon icon="ph:users" className={styles.Nav__itemIconInactive} />
            <InlineIcon icon="ph:users-fill" className={styles.Nav__itemIconActive} />
          </div>
          <div className={styles.Nav__itemText}>Clients</div>
        </NavLink>
    </div>
  )
}

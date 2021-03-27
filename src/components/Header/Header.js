import UserInfoDropdown from '../UserInfoDropdown/UserInfoDropdown'
import styles from './header.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.Header__content}>
          <div className={styles.Header__notification}>
            <InlineIcon icon="ph-bell" className={styles.Header__notificationIcon} />
            <div className={styles.Header__notificationDot}></div>
          </div>
          <UserInfoDropdown />
        </div>
      </div>
    </div>
  )
}

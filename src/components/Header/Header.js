import UserInfoDropdown from '../UserInfoDropdown/UserInfoDropdown'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import styles from './header.module.scss'
import { InlineIcon } from '@iconify/react-with-api';
import DropdownNotifications from '../DropdownNotifications/DropdownNotifications';

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.Header__content}>
          <DropdownNotifications>
            <div className={styles.Header__notification}>
              <InlineIcon icon="ph-bell" className={styles.Header__notificationIcon} />
              <div className={styles.Header__notificationDot}></div>
            </div>
          </DropdownNotifications>
          <DropdownMenu>
            <UserInfoDropdown />
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

import styles from './dropdownNotifications.module.scss'
import Tippy from '@tippyjs/react';

export default function DropdownNotifications({ children }) {
  return (
    <Tippy
      trigger='click'
      placement='bottom'
      theme='light-border'
      interactive={true}
      content={
        <div className={styles.Notifications}>
          <div className={styles.Notifications__header}>
            Notifications
          </div>
          <div className={styles.Notifications__list}>
            <div className={styles.Notifications__noContent}>No Notifications</div>
          </div>
        </div>
      }>
      {children}
    </Tippy>
  )
}

import styles from './dropdownMenu.module.scss'
import { InlineIcon } from '@iconify/react-with-api';
import Tippy from '@tippyjs/react';

export default function DropdownMenu({ children }) {
  return (
    <Tippy
      trigger='click'
      placement='bottom-end'
      theme='light-border'
      interactive={true}
      content={
        <div className={styles.DropdownMenu}>
          <div className={styles.DropdownMenu__item}>
            <InlineIcon icon="ph:user-circle" className={styles.DropdownMenu__icon} />
            Profile
          </div>
          <div className={styles.DropdownMenu__item}>
            <InlineIcon icon="ph:gear-six" className={styles.DropdownMenu__icon} />
            Settings
          </div>
        </div>
      }>
      {children}
    </Tippy>
  )
}

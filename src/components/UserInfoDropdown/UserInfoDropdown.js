import { forwardRef } from 'react';
import styles from './userInfoDropdown.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

const UserInfoDropdown = ({ img }, ref) => {
  return (
    <div className={styles.UserInfo} ref={ref}>
      <div className={styles.UserInfo__content}>
        <div className={styles.UserInfo__image}>
          {img ?
            <img src={img} alt="Profile" />
            :
            <div className={styles.UserInfo__initials}>KS</div>
          }
          <div className={styles.UserInfo__onlineDot}></div>
        </div>
        <div className={styles.UserInfo__text}>
          <div className={styles.UserInfo__name}>
            Pawan Kolhe
          </div>
          <div className={styles.UserInfo__email}>
            contact@pawankolhe.com
          </div>
        </div>
      </div>
      <div className={styles.UserInfo__icon}>
        <InlineIcon icon="akar-icons:chevron-down" />
      </div>
    </div>
  )
}

export default forwardRef(UserInfoDropdown);

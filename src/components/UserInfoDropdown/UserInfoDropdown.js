import styles from './userInfoDropdown.module.scss'

export default function UserInfoDropdown({ img }) {
  return (
    <div className={styles.UserInfo}>
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
  )
}

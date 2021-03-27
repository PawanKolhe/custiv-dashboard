import styles from './pageHeader.module.scss'

export default function PageHeader({ children, title }) {
  return (
    <div className={styles.PageHeader}>
      <div className="container">
        <div className={styles.PageHeader_container}>
          <div className={styles.PageHeader_title}>
            {title}
          </div>
          <div className={styles.PageHeader_content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

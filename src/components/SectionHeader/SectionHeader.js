import styles from './sectionHeader.module.scss'

export default function SectionHeader({ children, title }) {
  return (
    <div className={styles.SectionHeader}>
      <div className={styles.SectionHeader__title}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

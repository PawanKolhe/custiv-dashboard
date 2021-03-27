import styles from './sectionHeader.module.scss'

export default function SectionHeader({ title }) {
  return (
    <div className={styles.SectionHeader}>
      <div className={styles.SectionHeader__title}>{title}</div>
    </div>
  )
}

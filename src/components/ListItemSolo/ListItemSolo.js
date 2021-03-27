import Badge from '../Badge/Badge'
import styles from './listItemSolo.module.scss'

export default function ListItemSolo({ text, status }) {
  return (
    <div className={styles.ListItemSolo}>
      <div className={styles.ListItemSolo__text}>{text}</div>
      <div className={styles.ListItemSolo__status}>
        <Badge status={status} />
      </div>
    </div>
  )
}

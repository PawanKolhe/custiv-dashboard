import styles from './badge.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

export default function Badge({ status }) {
  const computeColor = (status) => {
    const statusText = status.toUpperCase();
    switch(statusText) {
      case 'REQUESTED':
        return styles.blue;
      case 'IN-PROGRESS':
        return styles.orange;
      case 'RECEIVED':
        return styles.green;
      default:
        return styles.blue;
    }
  }

  return (
    <div className={`${styles.Badge} ${computeColor(status)}`}>
      <InlineIcon icon="carbon:dot-mark" className={styles.Badge__dot} />
      <span>{status.toUpperCase()}</span>
    </div>
  )
}

import styles from './infoBox.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

export default function InfoBox({ value, text, icon, color }) {
  const computeColor = (color) => {
    switch(color) {
      case 'blue':
        return styles.blue;
      case 'orange':
        return styles.orange;
      case 'green':
        return styles.green;
      default:
        return styles.blue;
    }
  }

  return (
    <div className={`${styles.InfoBox} ${computeColor(color)}`}>
      <div className={styles.InfoBox__icon}>
        <InlineIcon icon={icon} />
      </div>
      <div className={styles.InfoBox__content}>
        <div className={styles.InfoBox__value}>
          {value}
        </div>
        <div className={styles.InfoBox__text}>
          {text}
        </div>
      </div>
    </div>
  )
}

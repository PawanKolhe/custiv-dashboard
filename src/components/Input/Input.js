import styles from './input.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

export default function Input({ value, icon, ...props }) {
  return (
    <div className={styles.Input}>
      <input value={value} required {...props} />
      <div className={styles.Input__icon}>
        {icon && <InlineIcon icon={icon} />}
      </div>
    </div>
  )
}

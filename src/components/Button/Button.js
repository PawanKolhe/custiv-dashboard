import styles from './button.module.scss'
import { InlineIcon } from '@iconify/react-with-api';

export default function Button({ children, icon, type='primary', ...props }) {
  return (
    <button className={`${styles.Button} ${type === 'primary' && styles.Button__primary}`} {...props}>
      {icon && <InlineIcon icon={icon} className={styles.Button__icon} />}
      <span>{children}</span>
    </button>
  )
}

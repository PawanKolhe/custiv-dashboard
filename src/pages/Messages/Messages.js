import styles from './messages.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function Messages() {
  return (
    <div className={styles.Messages}>
      <PageHeader title="Messages" />

      <div className="container page-content">
        Messages
      </div>
    </div>
  )
}

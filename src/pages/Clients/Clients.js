import styles from './clients.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function Clients() {
  return (
    <div className={styles.Clients}>
      <PageHeader title="Clients" />

      <div className="container page-content">
        Clients
      </div>
    </div>
  )
}

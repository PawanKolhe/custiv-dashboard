import styles from './suppliers.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function Suppliers() {
  return (
    <div className={styles.Suppliers}>
      <PageHeader title="Suppliers" />

      <div className="container page-content">
        Suppliers
      </div>
    </div>
  )
}

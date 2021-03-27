import styles from './projects.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <PageHeader title="Projects" />

      <div className="container page-content">
        Projects
      </div>
    </div>
  )
}

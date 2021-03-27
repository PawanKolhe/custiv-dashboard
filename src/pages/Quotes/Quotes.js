import styles from './quotes.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import Button from '../../components/Button/Button'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import InfoBox from '../../components/InfoBox/InfoBox'
import ListItemSolo from '../../components/ListItemSolo/ListItemSolo'

export default function Quotes() {
  return (
    <div className={styles.Quotes}>
      <PageHeader title="Quotes">
        <Button icon="bx:bxs-plus-circle">Start New Quote</Button>
      </PageHeader>

      <div className="container page-content">
        <div className={styles.GridSection}>
          <div className={styles.recentActivity}>
            <SectionHeader title="Recent Activity" />
            <div className={styles.gridRow}>
              <InfoBox value="209" text="Quotes Requested" color="blue" icon="grommet-icons:document-update" />
              <InfoBox value="36" text="Quotes In-Progress" color="orange" icon="grommet-icons:document-time" />
              <InfoBox value="47" text="Quotes Received" color="green" icon="grommet-icons:document-text" />
            </div>

          </div>
          <div className={styles.recentQuotes}>
            <SectionHeader title="Recent Activity" />
            <div className="flex-column">
              <ListItemSolo text="Prototyping Demo Quote" status="RECEIVED" />
              <ListItemSolo text="Prototyping Demo Quote" status="IN-PROGRESS" />
            </div>
          </div>
          <div className={styles.quotesTable}>
            <SectionHeader title="Total Quotes Found" />

          </div>
        </div>
      </div>
    </div>
  )
}

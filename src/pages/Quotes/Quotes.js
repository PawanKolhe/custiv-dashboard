import { useMemo, useState } from 'react'
import styles from './quotes.module.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import Button from '../../components/Button/Button'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import InfoBox from '../../components/InfoBox/InfoBox'
import ListItemSolo from '../../components/ListItemSolo/ListItemSolo'
import Table from '../../components/Table/Table'
import Badge from '../../components/Badge/Badge'
import Select from 'react-select'
import Input from '../../components/Input/Input'

const initialData = [
  {
    col1: 'Prototyping Demo Quote',
    col2: 'sanjaykumar@gmail.com',
    col3: '987 123 4567',
    col4: '10 Oct 2020 06.30 PM',
    col5: '3 Files',
    col6: 'REQUESTED',
  },
  {
    col1: 'Sample Prints Demo Quote',
    col2: 'sanjaykumar@gmail.com',
    col3: '987 123 4567',
    col4: '09 Oct 2020 08.45 PM',
    col5: '22 Files',
    col6:  'IN-PROGRESS',
  },
  {
    col1: 'Machine sample Demo Quote',
    col2: 'kartik21@gmail.com',
    col3: '887 467 3490',
    col4: '08 Oct 2020 06.11 PM',
    col5: '2 Files',
    col6:  'RECEIVED',
  },
  {
    col1: '4 Parts Demo Quote',
    col2: 'kartik21@gmail.com',
    col3: '887 467 3490',
    col4: '05 Oct 2020 07.30 PM',
    col5: '12 Files',
    col6:  'RECEIVED',
  },
  {
    col1: 'Parts new Demo Quote',
    col2: 'sanjaykumar@gmail.com',
    col3: '987 123 4567',
    col4: '06 Oct 2020 07.30 PM',
    col5: '7 Files',
    col6:  'REQUESTED',
  },
  {
    col1: 'CnC Prints Demo Quote',
    col2: 'sanjaykumar@gmail.com',
    col3: '987 123 4567',
    col4: '10 Sept 2020 01.30 PM',
    col5: '9 Files',
    col6:  'IN-PROGRESS',
  },
]

export default function Quotes() {
  const [searchText, setSearchText] = useState('');
  const [searchTextChangedValue, setSearchTextChangedValue] = useState('');
  const [tableData] = useState(initialData);

  const showSelectOptions = [
    { value: 'all', label: 'Show All Quotes' },
    { value: 'requested', label: 'Show Requested' },
    { value: 'in_progress', label: 'Show In-Progress' },
    { value: 'received', label: 'Show Received' },
  ]

  const [selectedShowOption, setSelectedShowOption] = useState(showSelectOptions[0]);

  const filteredData = useMemo(
    () => {
      let table_data = [...tableData];
      switch(selectedShowOption.value) {
        case 'requested':
          table_data = table_data.filter(item => item.col6 === 'REQUESTED')
          break;
        case 'in_progress':
          table_data = table_data.filter(item => item.col6 === 'IN-PROGRESS')
          break;
        case 'received':
          table_data =  table_data.filter(item => item.col6 === 'RECEIVED')
          break;
      }
      table_data = table_data.map(item => ({...item, col6: <Badge status={item.col6} />}));
      if(searchText) {
        return table_data.filter((item) => {
          return item.col1.toLowerCase().includes(searchText.toLowerCase());
        });
      }
      return table_data;
    },
    [selectedShowOption, searchTextChangedValue]
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Quote Name',
        accessor: 'col1',
      },
      {
        Header: 'Mail ID',
        accessor: 'col2',
      },
      {
        Header: 'Number',
        accessor: 'col3',
      },
      {
        Header: 'Request Date',
        accessor: 'col4',
      },
      {
        Header: 'Uploads',
        accessor: 'col5',
      },
      {
        Header: 'Status',
        accessor: 'col6',
      },
    ],
    []
  )

  const showSelectCustomStyles = {
    container: (provided) => ({
      ...provided,
      width: '200px',
      fontWeight: '600',
      fontSize: '0.8rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--color-primary-light)',
      paddingLeft: '5px'
    }),
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTextChangedValue(searchText);
  }

  return (
    <div className={styles.Quotes}>
      <PageHeader title="Quotes">
        <Button icon="bx:bxs-plus-circle">Start New Quote</Button>
      </PageHeader>

      <div className="container page-content">
        <div className={styles.GridSection}>
          <div className={styles.recentActivity}>
            <SectionHeader title="Recent Activity" />
            <div className={styles.recentActivityContent}>
              <InfoBox value="209" text="Quotes Requested" color="blue" icon="grommet-icons:document-update" />
              <InfoBox value="36" text="Quotes In-Progress" color="orange" icon="grommet-icons:document-time" />
              <InfoBox value="47" text="Quotes Received" color="green" icon="grommet-icons:document-text" />
            </div>
          </div>

          <div className={styles.recentQuotes}>
            <SectionHeader title="Recent Activity" />
            <div className={styles.recentQuotesContent}>
              <ListItemSolo text="Prototyping Demo Quote" status="RECEIVED" />
              <ListItemSolo text="Sample Prints Demo Quote" status="IN-PROGRESS" />
            </div>
          </div>

          <div className={styles.quotesTable}>
            <SectionHeader title={`${filteredData && filteredData.length} Total Quotes Found`}>
              <div className={styles.flexHorizontal}>
                <form onSubmit={handleSearch} noValidate>
                  <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search all Quotes"
                    icon="bx:bx-search"
                    type="text"
                  />
                </form>
                <Select
                  options={showSelectOptions}
                  styles={showSelectCustomStyles}
                  defaultValue={selectedShowOption}
                  onChange={setSelectedShowOption}
                />
              </div>
            </SectionHeader>
            <Table columns={columns} data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  )
}

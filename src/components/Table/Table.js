import styles from './table.module.scss'
import { useTable } from 'react-table'

export default function Table({ columns, data }) {
  const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div className={styles.Table__container}>
      <table className={styles.Table} {...getTableProps()}>
        <thead className={styles.Table__header}>
          {headerGroups.map(headerGroup => (
            <tr key={1} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps()} className={styles.Table__headerItem}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={styles.Table__body}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr key={row.id} {...row.getRowProps()} className={styles.Table__row}>
                {row.cells.map(cell => {
                  return (
                    <td key={cell.id} {...cell.getCellProps()} className={styles.Table__rowItem}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  )
}

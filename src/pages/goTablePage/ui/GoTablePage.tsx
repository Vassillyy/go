import { type FC, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppPaths } from '@/shared/constants/route';
import { tableConfigs } from '../config';
import { isTableSubtitle } from '../config/types.ts';
import styles from './GoTablePage.module.css';

export const GoTablePage: FC = () => {
  const { tableId = '' } = useParams();
  const location = useLocation();
  const { label } = location.state;

  const table = tableConfigs[tableId];

  const [checkedRows, setCheckedRows] = useState<Set<number>>(new Set());

  const toggleRow = (rowIndex: number) => {
    setCheckedRows((prev) => {
      const next = new Set(prev);
      if (next.has(rowIndex)) {
        next.delete(rowIndex);
      } else {
        next.add(rowIndex);
      }
      return next;
    });
  };

  return (
    <div className={styles.page}>
      <Link to={AppPaths.GO_SCHEME} className={styles.back}>
        ← Назад к схеме
      </Link>

      <div className={styles.container}>
        <h1 className={styles.title}>{label ?? tableId}</h1>

        {table ? (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th} />
                  {table.columns.map((column) => (
                    <th key={column} className={styles.th}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) =>
                  isTableSubtitle(row) ? (
                    <tr key={rowIndex} className={styles.subtitleRow}>
                      <td
                        className={styles.subtitleCell}
                        colSpan={table.columns.length + 1}
                      >
                        {row.subtitle}
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={rowIndex}
                      className={
                        checkedRows.has(rowIndex)
                          ? `${styles.tr} ${styles.trChecked}`
                          : styles.tr
                      }
                    >
                      <td className={styles.checkboxCell}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={checkedRows.has(rowIndex)}
                          onChange={() => toggleRow(rowIndex)}
                        />
                      </td>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={styles.td}
                          data-label={table.columns[cellIndex]}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.noResult}>По данному запросу данных нет</div>
        )}
      </div>
    </div>
  );
};

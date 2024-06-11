import styles from "../TransactionHistory/Transaction.module.css"

export default function TransactionsHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.theadTb}>
        <tr>
          <th className={styles.headName}>Type</th>
          <th className={styles.headName}>Amount</th>
          <th className={styles.headName}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.bodyTr}>
            <td className={styles.amount}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.amount}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

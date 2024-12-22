import styles from "./TransactionList.module.css";

import TransactionItem from "./TransactionItem";

const TransactionList = () => (
  <div className={styles.list}>
    <div className={styles.item}>
      <TransactionItem
        description="Spotify Subscription"
        type="Shopping"
        amount="- $2,500"
        className="expense"
      />
      <TransactionItem
        description="Freepik Sales"
        type="Transfer"
        amount="+ $750"
        className="income"
      />
      <TransactionItem
        description="Mobiel Service"
        type="service"
        amount="- 150$"
        className="expense"
      />
      <TransactionItem
        description=" Wilson"
        type="Transfer"
        amount="- 1050$"
        className="expense"
      />
      <TransactionItem
        description="Emilly"
        type="Transfer"
        amount="+ $840"
        className="income"
      />
    </div>
  </div>
);

export default TransactionList;

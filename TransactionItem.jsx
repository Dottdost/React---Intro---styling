import styles from "./TransactionItem.module.css";

const TransactionItem = ({ description, type, amount, className }) => (
  <div className={`${styles.item} ${styles[className]}`}>
    <span>{description}</span>
    <span>{type}</span>
    <span>{amount}</span>
  </div>
);

export default TransactionItem;

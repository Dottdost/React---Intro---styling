import TransactionList from "./TransactionList";
import styles from "./MainScreen.module.css";

function MainScreen() {
  return (
    <div className={styles.main}>
      <h1>All Transactions</h1>
      <TransactionList />
    </div>
  );
}

export default MainScreen;

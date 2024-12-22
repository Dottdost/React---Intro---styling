import styles from "./NavigationPanel.module.css";

function NavigationPanel() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Investments</li>
        <li>Credit Cards</li>
        <li>Loans</li>
        <li>Services</li>
      </ul>
    </nav>
  );
}

export default NavigationPanel;

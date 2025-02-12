import styles from "./pricingTable.module.css";

const PricingTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th></th>
              <th className={styles.plan}>Starter</th>
              <th className={styles.plan}>Premium</th>
              <th className={styles.plan}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Live Clients/Leads</td>
              <td>1-1000</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>IB Portal (Extra $50 each level)</td>
              <td>Max 3 level</td>
              <td>Unlimited</td>
              <td>Max 5 level</td>
            </tr>
            <tr>
              <td>Copier/PAMM/MAM Module only for MT5</td>
              <td>$1 per million each side Min charge & 1000 monthly</td>
              <td>$1 per million each side Min charge & 1000 monthly</td>
              <td>$1 per million each side Min charge & 1000 monthly</td>
            </tr>
            <tr>
              <td>PSP Integration (Extra $500/set up)</td>
              <td>2</td>
              <td>5</td>
              <td>3</td>
            </tr>
            <tr>
              <td>CRM Users (Extra $20 per user)</td>
              <td>5</td>
              <td>25</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
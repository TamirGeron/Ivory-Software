export const ExpendedRowCMP = ({ accounts }) => {
  return (
    <table className="expanded-row">
      <thead>
        <tr>
          <th>Account</th>
          <th>Bank</th>
          <th>Account Name</th>
          <th>Is Default Account</th>
          <th>Account Type</th>
          <th>Branch</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account, idx) => {
          return (
            <tr key={idx}>
              <td>{account.account}</td>
              <td>{account.bank}</td>
              <td>{account.accountName}</td>
              <td>{`${account.isDefaultAccount}`}</td>
              <td>{account.accountType}</td>
              <td>{account.branch}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

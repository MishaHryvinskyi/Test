import { TransactionTable } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) =>  {

    return (
        <TransactionTable>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
            </tbody>
        </TransactionTable>
    )
}
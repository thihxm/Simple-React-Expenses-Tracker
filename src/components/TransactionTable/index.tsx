import { Container } from './styles'

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>25/11/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Home</td>
            <td>05/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

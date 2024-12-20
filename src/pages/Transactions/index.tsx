import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <table>
                        <tbody>
                            <tr>
                                <td width="50%">Desenvolvimento de site</td>
                                <td>
                                    <PriceHighlight variant="income">
                                        R$12,000,00
                                    </PriceHighlight>
                                </td>
                                <td>05/12/2024</td>
                            </tr>
                            <tr>
                                <td width="50%">Despesa de hospedagem</td>
                                <td>
                                    <PriceHighlight variant="outcome">
                                        - R$ 2,000,00
                                    </PriceHighlight>
                                </td>
                                <td>10/12/2024</td>
                            </tr>
                            <tr>
                                <td width="50%">Social Media</td>
                                <td>
                                    <PriceHighlight variant="income">
                                        R$ 1.000,00
                                    </PriceHighlight>
                                </td>
                                <td>15/12/2024</td>
                            </tr>
                        </tbody>
                    </table>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}

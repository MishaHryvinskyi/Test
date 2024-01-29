import styled from "@emotion/styled";

export const TransactionTable = styled.table`
    padding: 50px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & th {
        padding: 40px;
        width: 300px;
        font-size: 24px;
        background-color: #93deff;
    }

    & td {
        text-align: center;
        padding: 40px;
        width: 300px;
        font-size: 20px;
        color: #f7f7f7;
    }

    & tr {
        background-color: #323643;
    }


    & tr:nth-child(even) {
        background-color: #606470;
    }
`;
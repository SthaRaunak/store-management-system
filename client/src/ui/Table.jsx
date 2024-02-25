import styled from "styled-components";

const StyledTable = styled.table`
    overflow-x: auto;
    table-layout: fixed;
    width: auto;
    border-collapse: collapse;
    background-color: white;
`;

const Head = styled.thead`
    border: 1px solid black;
`;

const Row = styled.tr``;

const Header = styled.th`
    border: 1px solid black;
    padding: 10px;
    color: #fff;
    background-color: var(--color-testLighter);
    text-align: left;
    font-weight: 500;
`;

const Body = styled.tbody`
    border: 1px solid black;
`;

const Data = styled.td`
    border-right: 1px solid black;
    padding: 6px 10px;
`;

function Table({ children }) {
    return <StyledTable>{children}</StyledTable>;
}

Table.Head = Head;
Table.Row = Row;
Table.Header = Header;
Table.Body = Body;
Table.Data = Data;

export default Table;

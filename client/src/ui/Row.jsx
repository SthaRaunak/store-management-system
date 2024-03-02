import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;

    ${(props) =>
        props.type === "vertical" &&
        css`
            gap: 2rem;
            flex-direction: column;
        `}

    ${(props) =>
        props.type === "horizontal" &&
        css`
            flex-direction: row;
            gap: 1.2rem;
            justify-content: space-between;
            align-items: center;
            &:has(input){
                align-items: baseline;
            }
        `}
`;

Row.defaultProps = {
    type: "vertical",
};

export default Row;

import styled, { css } from "styled-components";

const Input = styled.input`
    height: 30px;
    padding: 0 0.5rem;
    border: 1.8px solid #d3d3d3;
    border-radius: 5px;
    font-size: 1rem;
    ${(props) =>
        props.type == "file" &&
        css`
            height: 30px;
            font-size: 0.9rem;
            border: 0px;
            padding: 0px;
        `}
`;

export default Input;

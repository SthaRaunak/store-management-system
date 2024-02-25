import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props) =>
        props.as === "h1" &&
        css`
            font-size: 2rem;
            font-weight: 700;
        `}

    ${(props) =>
        props.as === "h2" &&
        css`
            font-size: 1.7rem;
            font-weight: 700;
        `}

    ${(props) =>
        props.as === "h3" &&
        css`
            font-size: 1.5rem;
            font-weight: 600;
        `}



    line-height: 1.4rem;
    color: #000000;
`;



export default Heading;

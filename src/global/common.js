import { css } from "styled-components";

// Styled03.jsx
export const flexCenter = css`
display: flex;
flex-direction: center;
align-items: center;
`

export const flexCenterColumn = css`
flex-direction: column;
${flexCenter};
` 

export const flexCenterRow = css`
flex-direction: row;
${flexCenter};
`

// Styled04.jsx
export const boxStyle = css`
    width: 100px;
    height: 100px;
    background-color: orange;
    `
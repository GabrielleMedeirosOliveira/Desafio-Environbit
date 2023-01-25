import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    width: 800px;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    background: aqua;
`

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    width: 285px;
    background: pink;
    flex-direction: column;
    align-items: center;
`

export const ImgCard = styled.img`
    width: 190px;
    height: 286px;
`;
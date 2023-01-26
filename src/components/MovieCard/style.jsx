import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    background: #3d187e;
    height: 46vw;
`

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
    justify-content: center;
    width: 212px;
    height: 294px;
    background: #dfd5d7;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`

export const ImgCard = styled.img`
    width: 120px;
    height: 178px;
`;

export const NoCard = styled.h1`
    color: white;
    margin: 10rem;
    font-weight: bold;
`
import styled from "styled-components";

export const Divnav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 109px;
    background: #f35e0c;
`

export const Link = styled.a`
    font-size: 30px;
    color: white;
    font-weight: bold;
    text-decoration: none;
`
export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Filter = styled.label`
    display: flex;
    gap: 0.5rem;
    margin-left: 10px;
    height: 25px;
    align-items: center;
`

export const FilterSelect = styled.select`
    border-radius: 5px;
    height: 25px;
    width: 110px;
`

export const SearchBar = styled.label`
    display: flex;
    align-items: center;
    margin-right: 10px;
    gap: 0.5rem;
    background: white;
    border: 1px solid grey;
    border-radius: 5px;
`
export const Placeholder = styled.input`
    border: none;
    padding: 5px;
    margin: 1px;
`

export const DivIcon = styled.div`
    margin-right: 6px;
`
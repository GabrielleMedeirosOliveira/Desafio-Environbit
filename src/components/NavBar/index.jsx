import { useContext } from 'react';
import { Context } from '../../context/context';
import { BsSearch } from 'react-icons/bs';
import {DivIcon, Divnav, Navbar, Filter,FilterSelect, Link, SearchBar,Placeholder} from "./style"

function NavBar() {
  const {
    setOrderBy, setInputValue,
  } = useContext(Context);

  const handleChangeSelect = (e) => {
    setOrderBy(e.target.value);
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Divnav>
       <Link
          href="https://environbit.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          &#x1F3AC; Desafio Environbit &#x1F3AC;
        </Link>
      <Navbar>
        <Filter htmlFor="filter">
          Ordenar por:
          <FilterSelect
            name="filter"
            id="filter"
            onChange={ handleChangeSelect }
            className="ml-2"
          >
            <option value="releasedYear">Lançamento</option>
            <option value="title">Nome</option>
            <option value="country">País</option>
          </FilterSelect>
        </Filter>
        <SearchBar htmlFor="findByName">
          <Placeholder
          placeholder='Pesquise por filme'
            type="text"
            onChange={ handleChangeInput }
          />
          <DivIcon>
            <BsSearch />
          </DivIcon>
        </SearchBar>
      </Navbar>
    </Divnav>
  );
}

export default NavBar;
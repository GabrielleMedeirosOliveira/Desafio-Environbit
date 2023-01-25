import { useState } from "react";
import MovieCard from "../MovieCard/index";

function HomePage() {
  const [orderBy, setOrderBy] = useState('releasedYear');

  const handleChangeSelect= (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div>
      <nav>
        <select
          name="filter"
          id="filter"
          onChange={ handleChangeSelect }
        >
          <option value="releasedYear">Lançamento</option>
          <option value="title">Nome</option>
          <option value="country">País</option>
        </select>
      </nav>
      <MovieCard orderBySelected={orderBy}/>
    </div>
  );
}

export default HomePage;
import getMovies from "../../service/api.jsx";
import {ImgCard, Div, Card} from "./style";
import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/context';

function MovieCard() {
  const [movies, setMovies] = useState([]);
  const { orderBy, inpValue } = useContext(Context);

  useEffect(() => {
    getMovies().then((res) => setMovies(res));
  }, []);

  useEffect(() => {
    if (inpValue) {
      setMovies((m) => m
        .filter((movie) => movie.title.toLowerCase().includes(inpValue)));
    } else {
      getMovies().then((res) => setMovies(res));
    }
  }, [inpValue]);

  return ( 
    <Div>
      {movies.length > 0 ? movies
         .sort((a, b) => (
          a[orderBy] < b[orderBy] ? -1
            : a[orderBy] > b[orderBy] ? 1 : 0
        ))
        .map((movie) => (
        <Card key={movie.id}>
          <p>{movie.title}</p>
          <ImgCard src={movie.imageUrl} alt={movie.title} />
          <p>{`Diretor: ${movie.director}`}</p>
            <p>{`País: ${movie.country}`}</p>
            <p>{`Ano de lançamento: ${movie.releasedYear}`}</p>
        </Card>
      )): (
        <div>
          <h1>
            Desculpe, não foi possível encontrar o filme que procura!
          </h1>
        </div>)}
    </Div>
  );
}

export default MovieCard;
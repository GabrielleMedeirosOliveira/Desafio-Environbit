import axios from "axios";
import {ImgCard, Div, Card} from "./style";
import { useEffect, useState } from 'react';

function MovieCard({orderBySelected}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('/db/movies.json')
      .then((res) => setMovies(res.data));
  }, []);

  return ( 
    <Div>
      {movies
        .sort((a, b) => a[orderBySelected] < b[orderBySelected] ? -1 : a[orderBySelected] > b[orderBySelected] ? 1 : 0)
        .map((movie) => (
        <Card key={movie.id}>
          <p>{movie.title}</p>
          <ImgCard src={movie.imageUrl} alt={movie.title} />
          <p>{`Diretor: ${movie.director}`}</p>
            <p>{`País: ${movie.country}`}</p>
            <p>{`Ano de lançamento: ${movie.releasedYear}`}</p>
        </Card>
      ))}
    </Div>
  );
}

export default MovieCard;
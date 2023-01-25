import axios from "axios";
import {ImgCard, Div, Card} from "./style";
import { useEffect, useState } from 'react';

function MovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('/db/movies.json')
      .then((res) => setMovies(res.data));
  }, []);

  return ( 
    <Div>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <p>{movie.title}</p>
          <ImgCard src={movie.imageUrl} alt={movie.title} />
          <p>{movie.director}</p>
          <p>{movie.country}</p>
          <p>{movie.releasedYear}</p>
        </Card>
      ))}
    </Div>
  );
}

export default MovieCard;
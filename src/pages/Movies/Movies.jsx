import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilms } from 'API/MoviesAPI';
import { InputStyled, SearchButton } from './Movies.styled';
import { FilmList } from 'components/FilmList/FilmList';

const Movies = () => {
  const [filmsData, setFilmsData] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = e => {
    e.preventDefault();

    const movieName = e.target.search.value;
    setSearchParams({ movieName });

    e.target.search.value = '';
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get('movieName');
      if (!query) return;
      try {
        const data = await getFilms(query);

        if (data.length < 1) {
          alert('ничего не нашли');
          return;
        }

        setFilmsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={searchMovie}>
        <InputStyled type="text" name="search" />
        <SearchButton>Search</SearchButton>
      </form>

      {filmsData && <FilmList data={filmsData} />}
    </>
  );
};

export default Movies;

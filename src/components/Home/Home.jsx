import { FilmList } from 'components/FilmList/FilmList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrandingFilms } from '../../API/MoviesAPI';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function renderTrendingFilms() {
      try {
        const data = await getTrandingFilms();
        setFilms(data);
      } catch (error) {
        console.log(error);
      }
    }
    renderTrendingFilms();
  }, []);

  return (
    <>
      <h1>Trending Todays</h1>
      {films && <FilmList data={films} />}
    </>
  );
};

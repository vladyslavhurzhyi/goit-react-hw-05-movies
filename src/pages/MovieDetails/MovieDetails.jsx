import { getFilmsById } from 'API/MoviesAPI';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GenresList,
  MoviesBox,
  AdditionalList,
  GoBackBtn,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [filmData, setFilmData] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function filmById() {
      try {
        const data = await getFilmsById(movieId);

        setFilmData(data);
      } catch (error) {
        alert('Нет информации по этому фильму');
      }
    }
    filmById();
  }, [movieId]);

  const userScore = (filmData.vote_average * 10).toFixed(2);

  const { id, name, original_title, overview, poster_path, genres } = filmData;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {filmData && (
        <>
          <button>
            ←<GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
          </button>
          <MoviesBox key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={name}
            />
            <div>
              <h1>{original_title}</h1>
              <p>User Score: {userScore}%</p>
              <h2>Overview</h2>
              <p> {overview}</p>
              <h2>Genres</h2>
              <GenresList>
                {genres.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </GenresList>
            </div>
          </MoviesBox>
          <p>Additional Information</p>
          <AdditionalList>
            <li>
              <Link key={'cast'} to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link key={'reviews'} to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </AdditionalList>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

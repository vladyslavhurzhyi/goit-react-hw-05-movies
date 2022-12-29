import { useParams } from 'react-router-dom';
import { getCastInfo } from 'API/MoviesAPI';
import { useEffect } from 'react';
import { useState } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [castData, castDataSet] = useState([]);

  useEffect(() => {
    async function getCast() {
      const data = await getCastInfo(movieId);
      castDataSet(data.cast);
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {castData &&
        castData.map(item => {
          return (
            <ul>
              <li key={item.id}>
                <img
                  key={item.profile_path}
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.name}
                ></img>
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            </ul>
          );
        })}
      {castData.length < 1 && <p>We don`t have any info for this movie.</p>}
    </>
  );
};

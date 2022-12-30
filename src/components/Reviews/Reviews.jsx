import { getReviewsInfo } from 'API/MoviesAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const data = await getReviewsInfo(movieId);

      setReviews(data);
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.map(item => {
        return (
          <ul>
            <li key={item.id}>
              Author: {item.author}
              <p key={item.url}>{item.content}</p>
            </li>
          </ul>
        );
      })}
      {reviews.length < 1 && <p>We don`t have any reviews for this movie.</p>}
    </>
  );
};

export default Reviews;

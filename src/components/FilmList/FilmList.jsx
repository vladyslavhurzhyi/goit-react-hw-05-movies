import { List } from '../../pages/Home/Home.styled';
import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map(item => (
        <Link
          to={`/movies/${item.id}`}
          key={item.id}
          state={{ from: location }}
        >
          {item.original_title || item.name}
        </Link>
      ))}
    </List>
  );
};

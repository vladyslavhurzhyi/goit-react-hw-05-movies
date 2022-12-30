import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GenresList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  li {
    list-style: none;
    margin-right: 10px;
  }
`;
export const MoviesBox = styled.div`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid black;

  div {
    margin-left: 10px;
  }
`;

export const AdditionalList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const GoBackBtn = styled(Link)`
  color: black;
  text-decoration: none;
  a:visited {
    text-decoration: none;
  }
`;

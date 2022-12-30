import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Box } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Box>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

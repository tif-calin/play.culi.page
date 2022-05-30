import React from 'react';
import styled from 'styled-components';

interface CompostPageProps {};

const Container = styled.div`

`;

const SplashText = styled.p`
  display: flex;
  margin-top: 4rem;
  font-size: 2rem;
  font-weight: 700;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1;
  width: fit-content;

  & > :not(:first-child) {
    font-weight: 600;
  }

  & > :last-child {
    font-size: 1.25rem;
    font-weight: 400;
    text-align: right;
  }
`;

const CompostPage = (_: CompostPageProps): React.ReactElement => {
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-bg', 'var(--oc-orange-0)');

    return () => {
      root.style.removeProperty('--color-bg');
    }
  }, []);

  return (
    <Container>
      <SplashText>
        <span>Unless someone like you cares an awful lot; </span>
        <span>Nothing is going to get better; it's not.</span>
        <span>—The Lorax</span>
      </SplashText>
    </Container>
  );
};

export default CompostPage;

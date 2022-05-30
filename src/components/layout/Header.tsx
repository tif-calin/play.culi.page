import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RainbowText from '../RainbowText';

const SITE = 
  process.env.REACT_APP_SITE_TITLE
  || process.env.REACT_APP_NAME
;

const StyledHeader = styled.header`
  margin-top: calc(var(--gutter) / 2);

  & .site-title {
    font-weight: 800;
    filter: saturate(0.55) brightness(0.25);
    transition: all 2s cubic-bezier(0, 0.9, 0.8, 0.99);

    &:hover {
      filter: saturate(1) brightness(1) hue-rotate(1440deg);
    }
  }

  & .breadcrumb {
    &::before {
      content: '\\003E';
      margin: 0 0.25rem;
    }
  }

  & > span > :last-child {
    width: 100%;
  }
`;

interface HeaderProps {
  breadcrumbs?: string[];
};

const Header = ({ breadcrumbs }: HeaderProps): React.ReactElement => {
  return (
    <StyledHeader>
      <span>
        {SITE && (
          <Link to="/">
            <span className="site-title">
              <RainbowText text={SITE} />
            </span>
          </Link>
        )}
        {breadcrumbs && breadcrumbs.map(crumb => (
          <span key={crumb} className="breadcrumb">{crumb}</span>
        ))}
      </span>
    </StyledHeader>
  );
};

export default Header;

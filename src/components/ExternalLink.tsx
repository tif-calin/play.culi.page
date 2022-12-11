import styled from 'styled-components';

// TODO: add an external link symbol as an ::after that dynamically expands
const ExternalLink = styled(({ children, ...props }: any) => <a target="_blank" rel="noopener noreferrer" {...props} >{children}</a>)`
  transition: color 0.1s;
  color: var(--color-link);

  &:hover { color: unset; }
`;

export default ExternalLink;

import styled from 'styled-components';
import ExternalLink from '../../../components/ExternalLink';
import ProjectBox from '../components/ProjectBox';

const StyledProjectBox = styled(ProjectBox)<any>`
  --offblack: var(--oc-gray-9);
  --offwhite: var(--oc-gray-0);
  --color-link: var(--yellow);

  background-color: var(--offblack);
  color: var(--offwhite);
`;

interface AsciiDatavizProjectProps {
  className?: string;
}

const AsciiDatavizProject = ({ className, ...props }: AsciiDatavizProjectProps) => {
  return (
    <StyledProjectBox className={className} {...props}>
      {/* TODO: add dark background and ascii graph */}
      <ExternalLink className="project-label inverse" href="https://ascii.dataviz.gallery/">
        ascii.dataviz.gallery
      </ExternalLink>
      <p>
        My collection of ascii, ansi, and unicode-based data visualizations libraries.
      </p>
    </StyledProjectBox>
  )
};

export default AsciiDatavizProject;

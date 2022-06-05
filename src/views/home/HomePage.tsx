import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ExternalLink from '../../components/ExternalLink';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: calc(var(--gutter) / 2);

  & > .content {
    background-color: var(--oc-gray-0);
    border-radius: 0.25rem;
    flex-grow: 1;
    padding: var(--gutter);
    --shadow-color: 0deg 0% 80%;
    box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  }

  & .island {
    background-color: var(--oc-white);
    padding: calc(var(--gutter) / 2) var(--gutter);
    border-radius: 0.25rem;
    box-shadow: var(--shadow-elevation-medium), inset 0 0 2px hsl(var(--shadow-color));
  }
`;

const ProjectsDisplay = styled.section<{
  pauseBanner?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: var(--gutter);

  @keyframes infinite-text-scroll {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  & p {
    line-height: 1.2;
    font-weight: 300;
  }

  & > h2.island {
    box-sizing: border-box;
    flex-grow: 1;
    min-height: 2.5rem;
    overflow: hidden;
    padding-left: 0;
    position: relative;
    font-size: 1rem;
    font-weight: 400;
    white-space: nowrap;

    & * {
      animation: infinite-text-scroll linear 12s infinite;
      animation-play-state: ${p => p.pauseBanner ? 'paused' : 'running'};
      box-sizing: content-box;
      cursor: pointer;
      position: absolute;
    }
  }

  & ul {
    list-style: none;
    padding: 0;
    gap: calc(var(--gutter) / 2);
    display: grid;

    grid: repeat(3, 33%) / repeat(3, 1fr);

    & > li.island {
      aspect-ratio: 1 / 1;

      & > .project-label {
        border-bottom: 1px solid var(--oc-orange-2);
        color: var(--color-link);
        text-decoration: underline;
        text-decoration-color: var(--oc-orange-5);
        transition: all 0.15s ease-out;

        &:hover {
          color: unset;
          border-color: var(--oc-orange-5);
        }
      }
    }
  }
`;

const ProjectCompostGuide = styled.li`
  &.project {
    background-color: var(--oc-orange-0);
    overflow: auto;
  }
`;

interface HomePageProps {};

const blah = [
  'mockups',
  'prototypes',
  'side projects',
  'passion projects',
  'personal projects',
  'proofs of concept',
  'hobby projects',
  'experiments',
  'blueprints',
  'interests, '
];

const HomePage = (_: HomePageProps): React.ReactElement => {
  const [isBannerPaused, toggleIsBannerPaused] = React.useReducer(b => !b, false);

  return (
    <>
      <Page>
        <h1>Home</h1>
        <div
          className="content"
        >
          <ProjectsDisplay pauseBanner={isBannerPaused}>
            <h2 aria-label="Projects section" className="island" onClick={toggleIsBannerPaused}>
              <div>{blah.join(', ') + blah.join(', ')}</div>
            </h2>
            <ul>
              <ProjectCompostGuide className="island project">
                <Link className="project-label" to="compost">
                  /compost
                </Link>
                <p>
                  A guide to all things composting. Including the Berkeley method, FAQs, compost politics, a nitrogen:carbon reference table, printables, and more!
                </p>
              </ProjectCompostGuide>
              <li className="island project">
                <ExternalLink className="project-label" href="https://votevote.page/">votevote.page</ExternalLink>
                <p>
                  A simulator for single-winner electoral methods.
                </p>
              </li>
            </ul>
          </ProjectsDisplay>
        </div>
      </Page>
    </>
  );
};

export default HomePage;

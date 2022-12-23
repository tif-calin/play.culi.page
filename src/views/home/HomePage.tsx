import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ExternalLink from '../../components/ExternalLink';
import AsciiDatavizProject from './projects/AsciiDatavizProject';

const Page = styled.div`
  --red: var(--oc-red-4);
  --yellow: var(--oc-yellow-4);
  --green: var(--oc-green-4);
  --blue: var(--oc-blue-4);
  --white: var(--oc-white);
  --shadow-color: 0deg 0% 80%;

  display: flex;
  flex-direction: column;
  height: 100%;
  gap: calc(var(--gutter) / 2);

  & > .content {
    background-color: var(--oc-gray-0);
    border-radius: 0.25rem;
    flex-grow: 1;
    padding: var(--gutter);
    box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  }

  & *:where(.island) {
    background-color: var(--white);
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
      animation: infinite-text-scroll linear 18s infinite;
      animation-play-state: ${p => p.pauseBanner ? 'paused' : 'running'};
      box-sizing: content-box;
      cursor: pointer;
      position: absolute;
    }
  }

  & ul {
    display: grid;
    gap: calc(var(--gutter) / 2);
    list-style: none;
    padding: 0;

    /* 
    grid: repeat(3, 33%) / repeat(3, 1fr);
    grid: repeat(auto-fill, minmax(10rem, 1fr)) / repeat(3, 1fr); 
    */
    grid: auto-flow / repeat(auto-fit, minmax(min(12rem, calc(100% / 3)), 1fr));

    & > .project {
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
  background-color: var(--oc-orange-0);
  overflow: auto;
`;

const ProjectVoteVote = styled.li`
  position: relative;

  & > *:not(.bar) {
    backdrop-filter: blur(0.5rem);
    position: relative;
    z-index: 1;
  }

  & > div.bar {
    --blue: #226699;
    --red: #dd2e44;
    --yellow: #ffcc4d;
    /* --blue: var(--oc-indigo-4);
    --red: var(--oc-orange-6);
    --yellow: var(--oc-orange-2); */
    --width: calc(100% / 3 - 4rem / 3);
    animation-duration: 12s;
    animation-timing-function: cubic-bezier(0.5, 1, 0.5, 1);
    animation-iteration-count: infinite;
    border-radius: 0.25rem 0.25rem 0 0;
    bottom: 0;
    opacity: 0.75;
    pointer-events: none;
    position: absolute;
    z-index: 0;

    &.blue {
      animation-name: blue-bar;
      background-color: var(--blue);
      left: 1rem;
      width: var(--width);
      top: 85%;
    }

    &.yellow {
      animation-name: yellow-bar;
      background-color: var(--yellow);
      left: calc(var(--width) + 2rem);
      width: var(--width);
      top: 70%;
    }

    &.red {
      animation-name: red-bar;
      background-color: var(--red);
      left: calc(var(--width) * 2 + 3rem);
      width: var(--width);
      top: 60%;
    }
  }

  @keyframes blue-bar {
    10% { top: 85%; }
    30% { top: 100%; }
    90% { top: 100%; }
  }

  @keyframes yellow-bar {
    10% { top: 70%; }
    30% { top: 55%; }
    50% { top: 30%; }
    90% { top: 30%; }
  }

  @keyframes red-bar {
    10% { top: 60%; }
    30% { top: 60%; }
    50% { top: 100%; }
    90% { top: 100%; }
  }

  &:hover * {
    animation-play-state: paused;
  }
`;

interface HomePageProps {};

const blah = [
  'tests',
  'trials',
  'mockups',
  'prototypes',
  'experiments',
  'side projects',
  'hobby projects',
  'passion projects',
  'personal projects',
  'minimum viable products',
  'proof-of-concepts',
  'demonstrations',
  'investigations',
  'mini projects',
  'field tests',
  'blueprints',
  'dummy runs',
  'trial-runs',
  'pitches',
  'pilots',
  'betas',
  'ideas',
  'demos, '
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
              <ProjectVoteVote className="island project">
                <ExternalLink className="project-label" href="https://votevote.page/">
                  votevote.page
                </ExternalLink>
                <p>
                  A simulator for single-winner electoral methods.
                </p>
                <div className="bar blue" role="presentation" />
                <div className="bar yellow" role="presentation" />
                <div className="bar red" role="presentation" />
              </ProjectVoteVote>
              <AsciiDatavizProject />
            </ul>
          </ProjectsDisplay>
        </div>
      </Page>
    </>
  );
};

export default HomePage;

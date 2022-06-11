import React from 'react';
import styled from 'styled-components';
import RainbowText from '../../components/RainbowText';
import SpeedText from './components/SpeedText';
import CardsSection from './sections/CardsSection';

interface CompostPageProps {};

const pageDescription = `
  This guide is meant to help you quickstart your compost journey by explaining one of the quickest composting methods you can use. The principles are inspired by the 'Berkeley method' which can produce usable soil within 18 days.
`;

const Container = styled.div`
  --pink: var(--oc-pink-4);
  --red: var(--oc-red-4);
  --orange: var(--oc-orange-4);
  --yellow: var(--oc-yellow-4);
  --lime: var(--oc-lime-4);
  --green: var(--oc-green-4);
  --teal: var(--oc-teal-4);
  --cyan: var(--oc-cyan-4);
  --blue: var(--oc-blue-4);
  --indigo: var(--oc-indigo-4);
  --violet: var(--oc-violet-4);
  --grape: var(--oc-grape-4);
  --black: var(--oc-black);
  --white: var(--oc-white);

  --color-link: var(--oc-cyan-6);

  position: relative;
  padding-bottom: 4rem;

  & #sunflower {
    --green: var(--oc-green-6);
    --yellow: var(--oc-yellow-3);

    display: inline;
    position: absolute;
    top: calc(50vh - 3rem);
    right: 0;
    transform: scale(-2, 2) translate3d(0, 0, 0);
    pointer-events: none;
  }

  & > h2 {
    font-size: 2rem;
    font-weight: 650;
    margin-top: 4rem;
  }

  & p {
    font-size: 1.25rem;
  }
`;

const SplashText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
  line-height: 1;
  margin: calc(50vh - 3rem) 0;
  position: relative;
  width: fit-content;

  & * {
    z-index: 1;
  }

  & > :not(:first-child) {
    font-weight: 600;
  }

  & > span:last-of-type {
    align-self: flex-end;
    font-size: 1.25rem;
    font-weight: 400;
    transform: rotate(-6deg);
    user-select: none;
    width: fit-content;
    
    &:hover #lorax {
      opacity: 1;

      & .right .brow {
        transform: translate3d(0, -2rem, 0);
      }
    }
  }

  & #lorax {
    height: 8rem;
    opacity: 0;
    overflow: visible;
    position: absolute;
    right: 0;
    transform: translate3d(-3.5rem, -6.5rem, 0) scale(0.15);
    transition: opacity 0.5s;
    width: 8rem;
    z-index: -1;

    & path {
      fill: var(--yellow);
      transition: transform 0.2s ease-in;
    }

    & .right {
      transform: translateX(48.5rem) scale(-1, 1);

      & .brow {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  filter: saturate(0.55) brightness(0.25);
  transition: all 2s cubic-bezier(0, 0.9, 0.8, 0.99);

  &:hover {
    filter: saturate(1) brightness(1) hue-rotate(1440deg);
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
        <span>
          <svg id="lorax" viewBox="-50 -50 100 100">
            <g>
              <g className="left">
                <path d="m 102.10196,457.99338 c -3.082408,-21.46124 -26.401185,-133.29752 29.10522,-192.14342 29.34364,-31.10908 102.8221,-45.97672 133.09188,-26.25265 44.49934,28.99617 77.20629,22.23601 99.18945,21.53232 7.74513,25.97637 25.19541,27.94956 25.19541,27.94956 0,0 0.099,1.63304 0,76.79023 -69.20364,73.91986 -182.47833,-16.45276 -286.58196,92.12396 z"/>
                <path className="brow" d="m 283.13368,221.89611 c -20.92311,-20.43179 -30.41133,-34.19117 -38.18343,-51.87182 21.83067,-46.68873 74.20552,-43.70681 74.20552,-43.70681 0,0 -2.16649,-6.79523 -39.62431,-6.00368 66.54937,-19.56414 86.45304,43.94696 86.45304,43.94696 0.46293,35.80901 0.10923,0.0546 0.99535,36.83559 -20.4815,-21.33958 -0.80491,-0.84959 -21.27204,-21.61203 -15.58075,-19.7698 -61.36051,-9.72872 -62.57413,42.41179 z"/>
              </g>
              <g className="right">
                <path d="m 102.10196,457.99338 c -3.082408,-21.46124 -26.401185,-133.29752 29.10522,-192.14342 29.34364,-31.10908 102.8221,-45.97672 133.09188,-26.25265 44.49934,28.99617 77.20629,22.23601 99.18945,21.53232 7.74513,25.97637 25.19541,27.94956 25.19541,27.94956 0,0 0.099,1.63304 0,76.79023 -69.20364,73.91986 -182.47833,-16.45276 -286.58196,92.12396 z"/>
                <path className="brow" d="m 283.13368,221.89611 c -20.92311,-20.43179 -30.41133,-34.19117 -38.18343,-51.87182 21.83067,-46.68873 74.20552,-43.70681 74.20552,-43.70681 0,0 -2.16649,-6.79523 -39.62431,-6.00368 66.54937,-19.56414 86.45304,43.94696 86.45304,43.94696 0.46293,35.80901 0.10923,0.0546 0.99535,36.83559 -20.4815,-21.33958 -0.80491,-0.84959 -21.27204,-21.61203 -15.58075,-19.7698 -61.36051,-9.72872 -62.57413,42.41179 z"/>
              </g>
            </g>
          </svg>
          <span>—The Lorax</span>
        </span>
      </SplashText>
      <svg id="sunflower" viewBox="0 0 72 72" height="72px" vectorEffect="non-scaling-stroke">
        <g className="color">
          <path fill="var(--yellow)" stroke="none" d="M43.2779,20.5208c0.2751-0.6458,1.4448-3.2894,1.915-3.8596c2.5924-3.1437,7.5403-3.3442,7.5403-3.3442 s0.7413,4.8964-1.8486,8.0389c-0.7005,0.8493-1.573,1.4837-2.4733,1.9575l-1.8646,0.8496 c0.8166-0.4354,3.5897-1.6339,4.5743-1.7568c4.0433-0.5046,7.7775,2.7478,7.7775,2.7478s-2.8239,4.0682-6.8647,4.5736 c-1.5043,0.1875-2.9658-0.1449-4.2082-0.6363l-1.5123-0.5623c1.0721,0.4001,3.6449,1.5619,4.525,2.46 c2.8519,2.9103,2.5281,7.8516,2.5281,7.8516s-4.9474,0.2194-7.7984-2.6884c-0.6293-0.6423-1.8855-3.7761-2.2431-4.5413 l0.7669,2.3973c0.2385,0.7124,0.3923,1.4743,0.4068,2.268c0.0742,4.074-3.5548,7.4433-3.5548,7.4433s-3.7467-3.2383-3.822-7.3099 c-0.0151-0.834,1.3468-4.7053,1.3468-4.7053l-1.1396,2.622c-1.7718,2.4884-4.5155,4.1433-7.5548,4.4487 c-0.9254,0.093-1.5437,0.0656-1.5437,0.0656s-0.3238-4.9413,2.5281-7.8516c0.8287-0.8457,1.8343-1.4269,2.844-1.8259l1.711-0.7108 c-0.0038,0.0015-4.3141,1.4544-5.7507,1.2753c-4.0408-0.5054-6.8647-4.5736-6.8647-4.5736s3.7341-3.2524,7.7775-2.7478 c0.8371,0.1045,3.8427,1.578,4.5608,1.9202l-2.2099-1.2115c-0.7715-0.4485-1.5076-1.0231-2.1146-1.759 c-2.59-3.1425-1.8486-8.0389-1.8486-8.0389s4.9479,0.2005,7.5403,3.3441c0.5013,0.6079,1.8537,3.2157,2.135,3.9064l-0.9102-1.9404 c-0.2945-0.7916-0.49-1.6496-0.5066-2.5482c-0.0737-4.0736,3.5548-7.4433,3.5548-7.4433s3.7478,3.2359,3.822,7.3099 c0.0163,0.8967-0.1467,1.7592-0.411,2.5592"/>
          <circle cx="40.7923" cy="26.177" r="5" fill="var(--orange)" stroke="none"/>
          <path fill="var(--green)" stroke="none" d="M23.3647,38.9665c2.3438,2.8687,1.6469,7.3169,1.6469,7.3169s-4.4974-0.2037-6.8419-3.0725 s-1.6469-7.3169-1.6469-7.3169S21.0209,36.1001,23.3647,38.9665z"/>
          <path fill="var(--green)" stroke="none" d="M36.6533,52.5013c2.8575-2.3347,7.2883-1.6405,7.2883-1.6405s-0.2029,4.4799-3.0605,6.8152 c-2.8575,2.3353-7.2883,1.6405-7.2883,1.6405S33.7981,54.836,36.6533,52.5013z"/>
          <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="2" d="M25.9551,16.18"/>
          <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="2" d="M44.1915,16.0582"/>
        </g>
        <g xmlns="http://www.w3.org/2000/svg" className="line">
          <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M65.7251,28.3957"/>
          <circle cx="40.7923" cy="26.177" r="5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.8586,38.5631 c2.7895,3.4142,1.96,8.708,1.96,8.708s-5.3525-0.2425-8.1427-3.6566s-1.96-8.708-1.96-8.708S21.0691,35.1517,23.8586,38.5631z"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.2779,20.5208 c0.2751-0.6458,1.4448-3.2894,1.915-3.8596c2.5924-3.1437,7.5403-3.3442,7.5403-3.3442s0.7413,4.8964-1.8486,8.0389 c-0.7005,0.8493-1.573,1.4837-2.4733,1.9575l-1.8646,0.8496c0.8166-0.4354,3.5897-1.6339,4.5743-1.7568 c4.0433-0.5046,7.7775,2.7478,7.7775,2.7478s-2.8239,4.0682-6.8647,4.5736c-1.5043,0.1875-2.9658-0.1449-4.2082-0.6363 l-1.5123-0.5623c1.0721,0.4001,3.6449,1.5619,4.525,2.46c2.8519,2.9103,2.5281,7.8516,2.5281,7.8516s-4.9474,0.2194-7.7984-2.6884 c-0.6293-0.6423-1.8855-3.7761-2.2431-4.5413l0.7669,2.3973c0.2385,0.7124,0.3923,1.4743,0.4068,2.268 c0.0742,4.074-3.5548,7.4433-3.5548,7.4433s-3.7467-3.2383-3.822-7.3099c-0.0151-0.834,1.3468-4.7053,1.3468-4.7053l-1.1396,2.622 c-1.7718,2.4884-4.5155,4.1433-7.5548,4.4487c-0.9254,0.093-1.5437,0.0656-1.5437,0.0656s-0.3238-4.9413,2.5281-7.8516 c0.8287-0.8457,1.8343-1.4269,2.844-1.8259l1.711-0.7108c-0.0038,0.0015-4.3141,1.4544-5.7507,1.2753 c-4.0408-0.5054-6.8647-4.5736-6.8647-4.5736s3.7341-3.2524,7.7775-2.7478c0.8371,0.1045,3.8427,1.578,4.5608,1.9202 l-2.2099-1.2115c-0.7715-0.4485-1.5076-1.0231-2.1146-1.759c-2.59-3.1425-1.8486-8.0389-1.8486-8.0389s4.9479,0.2005,7.5403,3.3441 c0.5013,0.6079,1.8537,3.2157,2.135,3.9064l-0.9102-1.9404c-0.2945-0.7916-0.49-1.6496-0.5066-2.5482 c-0.0737-4.0736,3.5548-7.4433,3.5548-7.4433s3.7478,3.2359,3.822,7.3099c0.0163,0.8967-0.1467,1.7592-0.411,2.5592"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36.2415,51.9973 c3.4142-2.7895,8.708-1.96,8.708-1.96s-0.2425,5.3525-3.6566,8.1427c-3.4142,2.7902-8.708,1.96-8.708,1.96 S32.8301,54.7868,36.2415,51.9973z"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34.3663,41.0292 c-3.438,3.548-7.676,10.246-5.829,20.735"/>
        </g>
      </svg>
      <PageTitle>
        <RainbowText text="The Rapid Compost Guide" />
      </PageTitle>
      <p>
        <SpeedText text={pageDescription} />
      </p>
      <CardsSection />
      <h2>Browns and Greens</h2>
      <p>
        <SpeedText
          text={`If you prefer to 'set it and forget it' and let your food waste "cold compost", then that can totally work and you'll likely have usable soil within a year (depending on the climate where you live). The alternative to this is "hot composting" where you create the right conditions for microorganism activity to increase so much that you can actually burn your hand if you were to put it inside your heap. Regardless of how much effort you want to put into it, learning the principles of the Berkeley method can still help you create soil in a faster, safer, and possibly less stinky way!`}
        />
      </p>
    </Container>
  );
};

export default CompostPage;

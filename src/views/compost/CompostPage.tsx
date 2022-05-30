import React from 'react';
import styled from 'styled-components';

interface CompostPageProps {};

const Container = styled.div`
  --cyan: var(--oc-cyan-4);
  --yellow: var(--oc-yellow-4);
  --black: var(--oc-black);
  --white: var(--oc-white);
`;

const SplashText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
  line-height: 1;
  margin: 8rem 0 4rem;
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

const QuickstartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Quickstart = styled.section`
  --bg-color: var(--white);
  border: 0.25rem solid var(--black);
  border-radius: 2px;
  transform: rotate(3deg);
  width: 20rem;

  & > h2 {
    background-color: var(--cyan);
    border-bottom: 0.2rem solid var(--black);
    padding: 0.25rem 0.5rem;
  }

  & > ol {
    padding: 0.5rem;
    padding-left: 2rem;
    max-height: 20rem;
    overflow-y: auto;   


    background-color: var(--bg-color);

    &:hover, &:focus, &:active {
      background:
        linear-gradient(#ffff, #ffff),
        linear-gradient(#ffff, #ffff) 0 100%,
        linear-gradient(#0000 0 25%, #0005 25% 75%, #0000 75%) 50% 0,
        linear-gradient(#0000 0 25%, #0005 25% 75%, #0000 75%) 50% 100%
      ;
      background-size: 100% 1rem, 100% 1rem, 50% 0.5rem, 50% 0.5rem;
      background-attachment: local, local, scroll, scroll;
      background-color: var(--bg-color);
      background-repeat: no-repeat;
    }
  }
`;

// const colors = [
//   'pink',
//   'red',
//   'orange',
//   'yellow',
//   'lime',
//   'green',
//   'teal',
//   'cyan',
//   'blue',
//   'indigo',
//   'violet',
//   'grape',
// ];

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
      <QuickstartWrapper>
        {/* <svg className="balls" viewBox={`-50 0 ${colors.length * 100} 100`} height="50px" width="100%">
          {colors.map((color, i, arr) => (
            <circle
              key={color}
              cx={i * 100}
              cy={50}
              r={40}
              fill={`var(--oc-${color}-4)`}
            />
          ))}
        </svg> */}
        <Quickstart>
          <h2>Quickstart</h2>
          <ol>
            <li>
              Shred/mulch/blend the organic matter (browns and greens, but browns especially).
            </li>
            <li>
              Pay attention to the ingredients and calculate your overall <abbr title="carbon to nitrogen">C:N</abbr> ratio and try to get it to around 25:1. Additionally, look out for any ingredients that might make the pH too acidic or alkaline. Also make sure there are good sources of specific minerals. Add special ingredients as needed.
            </li>
            <li>
              Make a heap of compost that's about a 1.5m cube. You can add bokashi or other <abbr title="effective microorganisms">EMO</abbr>s to help ferment. You should at least add some healthy soil to introduce certain microbes. You can also make sure worms are in the mix to help out.
            </li>
            <li>
              Keep it in the sun, but water it to make sure it doesn't dry out. After 4 days, take the outsides of the heap and put it in another heap. Then take the insides and make a wall around the outside bits with the inside bits.
            </li>
            <li>
              Repeat step 4 until you have good quality compost (~2 weeks). After you plant your plants, you can add mycorrhizal fungi mix.
            </li>
          </ol>
        </Quickstart>
      </QuickstartWrapper>
    </Container>
  );
};

export default CompostPage;

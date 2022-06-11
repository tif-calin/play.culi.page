import styled from 'styled-components';
import ExternalLink from '../../../components/ExternalLink';

// https://en.wikipedia.org/wiki/User:Tr3ndyBEAR/composting
// https://daily.jstor.org/a-history-of-human-waste-as-fertilizer/
// https://oa.mg/work/10.1215/22011919-3614962

/*
mycelium
resisting reduction
plant intelligence
communities

compost resources
(maps)
 - makesoil.org
 - sharewaste.com
 - findacomposter.com
 - compostnow.org
(wiki)
 - appropedia
(rad)
 - https://syllabus.pirate.care/
 - https://textz.com/

Aeon.co
https://aeon.co/essays/mushroom-foraging-is-deadly-why-am-i-doing-it
https://aeon.co/ideas/lets-open-our-sealed-off-lives-to-semi-permeable-architecture
https://aeon.co/essays/organisms-are-not-passive-recipients-of-evolutionary-forces
https://aeon.co/essays/what-can-an-embodied-history-of-trees-teach-us-about-life
https://aeon.co/essays/japanese-culture-conquered-the-human-fear-of-creepy-crawlies
https://aeon.co/essays/what-can-we-learn-from-natures-experience-of-catastrophes
https://aeon.co/essays/like-start-ups-most-intentional-communities-fail-why
https://aeon.co/essays/any-garden-i-love-must-be-wild
https://aeon.co/essays/i-was-a-thrifty-yankee-with-a-big-crush-on-the-american-west
https://aeon.co/essays/beyond-the-animal-brain-plants-have-cognitive-capacities-too

JoDS
https://jods.mitpress.mit.edu/pub/issue4-ionat-maholo/release/1
https://jods.mitpress.mit.edu/pub/enlightenment-to-entanglement/release/1

Shareable
https://www.shareable.net/community-composting-resources/

Low Tech Mag
https://solar.lowtechmagazine.com/2020/04/fruit-trenches-cultivating-subtropical-plants-in-freezing-temperatures.html
https://solar.lowtechmagazine.com/2021/03/urban-fish-ponds-low-tech-sewage-treatment-for-towns-and-cities.html
https://solar.lowtechmagazine.com/2015/02/heating-people-not-spaces.html
https://solar.lowtechmagazine.com/2017/02/vietnams-low-tech-fermentation-food-system-takes-advantage-of-decay.html
https://solar.lowtechmagazine.com/2015/12/fruit-walls-urban-farming.html

Quanta Mag
https://www.quantamagazine.org/soils-microbial-market-shows-the-ruthless-side-of-forests-20190827/
https://www.quantamagazine.org/how-soil-microbes-affect-the-environment-20150616/
https://www.quantamagazine.org/heat-loving-microbes-once-dormant-thrive-over-decades-old-fire-20190416/
https://www.quantamagazine.org/scientists-seek-to-update-evolution-20161122/
https://www.quantamagazine.org/a-soil-science-revolution-upends-plans-to-fight-climate-change-20210727/

*/


const CardWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
  margin-top: 4rem;

  & * {
    box-sizing: border-box;
  }

  & .card {
    --bg-color: var(--white);
    --border: 0.25rem solid var(--black);
    background-color: var(--bg-color);
    border-top: var(--border);
    border-left: var(--border);
    border-radius: 2px;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.2s ease-in;
    flex: 1;

    height: fit-content;

    &::before {
      border: var(--border);
      border-radius: 2px;
      content: '';
      position: absolute;
      transition: transform 0.2s ease-in-out;
      transform: translate3d(1rem, 1rem, 0);
      z-index: -1;

      height: 100%;
      width: 100%;
    }

    &:hover {
      transform: rotate(0deg);
      &::before {
        transform: translate3d(0, 0, 0);
      }
    }

    & > * {
      border-right: var(--border);
      border-bottom: var(--border);
    }

    & > h2 {
      border-bottom: var(--border);
      padding: 0.25rem 0.5rem;
    }

    & > :is(ol, ul) {
      background-color: var(--bg-color);
      border-bottom-right-radius: 2px;
      height: 20rem;
      max-height: 20rem;
      overflow-y: auto;
      padding: 0.5rem;
      padding-left: 2rem;

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
  }
`;

const Quickstart = styled.aside`
  transform: rotate(3deg);

  &::before {
    background: var(--red);
  }

  & > h2 {
    background-color: var(--yellow);
  }
`;

const Protips = styled.aside`
  transform: rotate(-2deg);

  &::before {
    background: var(--indigo);
  }

  & > h2 {
    background-color: var(--grape);
  }
`;

const FurtherReadings = styled.aside`
  transform: rotate(1deg);

  &::before {
    background: var(--green);
  }

  & > h2 {
    background-color: var(--cyan);
  }
`;

const CardsSection = () => (
  <CardWrapper>
    <Quickstart className="card">
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
    <Protips className="card">
      <h2>Protips</h2>
      <ul>
        <li>Moisture content should be ~50-60%. A good rule of thumb is to take a handful of compost and squeeze it. If water comes out, it&apos;s too wet. If it crumbles, it&apos;s too dry. A more thorough way to measure would be to weigh some compost before and after drying it out.</li>
        <li>Sun and rain are important natural elements to decomposition but too much sun exposure can dry out your pile and too much rain can waterlog it and create conditions for anaerobic bacteria to survive.</li>
        <li>Many guides suggest "layering" your piles (e.g. 3 layers of brown and 1 layer of green). This doesn't really help with anything, but may make it easier to keep track of the brown:green ratios.</li>
        <li>High temperatures is obviously the goal with hot composting, but temperatures that are too high can kill even most thermophiles. If temperatures get above ~65°C (149°F) cool down the pile by turning it over in order to cool it down. The goal is to maintain a temperature above 55°C (131°F) since this is where most pathogens to plants (and even to humans) die off.</li>
        <li>The goal of a large compost pile is more insulation which allows you to maintain higher temperatures more easily. However, there are other ways to insulate which might allow you to get away with a smaller pile.</li>
        <li>The shape and texture of compost materials matters. Certain materials might create more aeration spaces which can affect many characteristics of your compost pile.</li>
        <li>Ultimately, the C:N measurement is just a rule of thumb and won&apos;t always give you an accurate estimation of how long it can take a material to break down. There are many forms of carbon and complex chemicals like lignan will take much longer to break down than sugar.</li>
        <li>A compost screen can be used to separate out bigger chunks of material that haven't yet decomposed. These pieces can be added to your next heap.</li>
        <li>Stay in drugs</li>
        <li>Eat your school</li>
        <li>Don&apos;t do vegetables</li>
      </ul>
    </Protips>
    <FurtherReadings className="card">
      <h2>Further Readings</h2>
      <ul>
        <li>
          <ExternalLink href="https://daily.jstor.org/a-history-of-human-waste-as-fertilizer/">A history of human waste as fertilizer</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://oa.mg/work/10.1215/22011919-3614962">Compost politics: Experimenting with togetherness in vermicomposting</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://aeon.co/essays/ours-is-the-waste-age-thats-the-key-to-tranforming-the-future">Ours is the waste age: that&apos;s the key to transforming the future</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.youtube.com/watch?v=OS9uhASKyjA">Japan&apos;s town with no waste</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.shareable.net/how-to-free-the-soil-by-depaving/">How to free the soil by depaving</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://solar.lowtechmagazine.com/2018/07/fermentation-and-daily-life.html">The messy world of fermentation</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.theguardian.com/environment/2022/may/07/secret-world-beneath-our-feet-mind-blowing-key-to-planets-future">The secret world beneath our feet is mind-blowing - and the key to our planet's future</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://oa.mg/work/10.1021/jf030196x">Compost as a soil supplement increases the level of antioxidant compounds and oxygen radical absorbance capacity in strawberries</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.quantamagazine.org/how-soil-microbes-affect-the-environment-20150616/">Below our feet, a world of hidden life</ExternalLink>
        </li>
      </ul>
    </FurtherReadings>
  </CardWrapper>
);

export default CardsSection;

import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  & .hide {
    display: none;
  }

  & section > div {
    border: 1px solid black;
    border-radius: 0.15rem;
    padding: 0.5rem;
  }
`;

interface CatfoodPriceObservationsPageProps {};

const CatfoodPriceObservationsPage = (_: CatfoodPriceObservationsPageProps): React.ReactElement => {
  return (
    <Page>
      <h1>indicators</h1>
      <p>
        interest rates; yield curve; s&p 500; tech layoffs
      </p>
      <section>
        <h2>yield curve</h2>
        <div>

        </div>
      </section>
    </Page>
  );
};

export default CatfoodPriceObservationsPage;

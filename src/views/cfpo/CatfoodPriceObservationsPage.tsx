import React from 'react';
import styled from 'styled-components';
import PageContextProvider from './PageContext';
import AddObservationFormSection from './sections/AddObservationFormSection';
import ImportSection from './sections/ImportSection';

// TODO: for visitors, add in test data so they could
//       see the visualizations

const Page = styled.div`
  --color-link: var(--oc-blue-1);
  --color-text: var(--oc-yellow-3);
  --color-line: var(--oc-gray-9);
  --color-bg: var(--oc-gray-9);
  --color-fg: var(--oc-yellow-3);
  --color-input: var(--oc-gray-1);
  --color-input-2: var(--oc-gray-3);
  --color-error: var(--oc-pink-5);
  --color-succes: rgba(var(--oc-gray-9-rgb), 0.5);
  --font-mono: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; 

  accent-color: var(--color-fg);

  background: var(--color-bg);
  color: var(--color-text);
  padding: 0.75rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;

  & a[href] {
    color: var(--color-link);
    transition: text-decoration 0.1s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  & section {
    flex: 1;

    & > div {
      background: var(--color-fg);
      border-radius: 0.2rem;
      color: var(--color-bg);
      padding: 1rem;
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  & .disclaimer {
    flex: 0;
    font-size: 0.75rem;
    margin-top: 2rem;
    opacity: 0.5;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  & * {
    max-width: 100%;
  }

  & :where(input, textarea, select, button) {
    background: var(--color-input);
    border: 2px solid var(--color-line);
    border-radius: 0.2rem;
    height: 2rem;
    padding: 0.25rem 0.4rem;
    width: 18rem;

    &[type="number"] {
      width: 6rem;
    }

    &:where(select) {
      background: var(--color-input-2);
      width: 3rem;
    }

    &:where(select, button, input[type="file"]) {
      cursor: pointer;
    }

    &:where(button) {
      background: var(--color-input-2);
      transition: all 0.1s ease-in-out;
      transition-property: background-color, color;

      &:not(:disabled):hover {
        background: var(--color-bg);
        color: var(--color-fg);
      }
    }
  }

  & .squish {
    width: fit-content;
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

interface CatfoodPriceObservationsPageProps {};

const CatfoodPriceObservationsPage = (_: CatfoodPriceObservationsPageProps): React.ReactElement => {
  return (
    <PageContextProvider>
      <Page>
        <h1>catfood price tracker</h1>
        <AddObservationFormSection />
        <section>
          <h2>Visualize data</h2>
          <div>
            recreate those graphs
          </div>
        </section>
        <section>
          <h2>Export data</h2>
          <div>
            insert code mirror
          </div>
        </section>
        <ImportSection />
        <p className="disclaimer">
          See <a href="https://dontplaywithculi.netlify.app/catfood">original implementation here</a>. Please excuse the terrible UI. I was experimenting with component libraries.
        </p>
      </Page>
    </PageContextProvider>
  );
};

export default CatfoodPriceObservationsPage;

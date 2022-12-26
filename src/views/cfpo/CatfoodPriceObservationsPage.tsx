import React from 'react';
import styled from 'styled-components';
import FancyInput from './components/FancyInput';

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

  & section > div {
    background: var(--color-fg);
    border-radius: 0.2rem;
    color: var(--color-bg);
    padding: 1rem;
  }
`;

const AddObservationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & label {
    font-weight: 600;
  }

  & > div {
    width: 100%;

    & > span {
      width: 1.5rem;
      overflow: hidden;
    }
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
      width: 3rem;
    }

    &:where(select, button) {
      background: var(--color-input-2);
      cursor: pointer;
    }

    &:where(button) {
      transition: all 0.1s ease-in-out;
      transition-property: background-color, color;

      &:hover {
        background: var(--color-bg);
        color: var(--color-fg);
      }
    }
  }

  & .squish {
    border: 1px dashed var(--color-line);
    padding: 0.25rem;
    border-radius: 0.2rem;
    margin-left: -0.25rem;
    width: fit-content;

    padding-top: calc(0.5rem + 2px);

    @supports selector(:has(> *)) {
      padding-top: 0.25rem;
      transition: padding-top 0.1s ease-out;

      &:has(input:not(:placeholder-shown)) {
        padding-top: calc(0.5rem + 2px);
      }
    }

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
    <Page>
      <h1>catfood price tracker</h1>
      <section>
        <h2>Add observations</h2>
        <div>
          <AddObservationForm>
            <FancyInput label="store" />
            {/* 
              autofill 
              show suggestions for other most popular choices
            */}
            <FancyInput label="cfdb url" type="url" />
            <div className="squish">
              <FancyInput label="price" type="number" />
              <span>for</span>
              <FancyInput label="size" type="number" />
              <select>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
              </select>
            </div>
            <FancyInput label="date" type="date" />

            <button type="submit" formMethod='' >Add observation</button>
          </AddObservationForm>
        </div>
      </section>
      <section>
        <h2>Visualize data</h2>
        <div>
          hiii
        </div>
      </section>
      <section>
        <h2>Export data</h2>
        <div>
          hiii
        </div>
      </section>
      <section>
        <h2>Import data</h2>
        <div>
          hiii
        </div>
      </section>
      <p className="disclaimer">
        See <a href="https://dontplaywithculi.netlify.app/catfood">original implementation here</a>. Please excuse the terrible UI. I was experimenting with component libraries.
      </p>
    </Page>
  );
};

export default CatfoodPriceObservationsPage;

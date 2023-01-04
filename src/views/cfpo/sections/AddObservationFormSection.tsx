import React from 'react';
import styled from 'styled-components';
import FancyInput from '../components/FancyInput';
import { usePricesObsData } from '../PageContext';

const Container = styled.section`
  & > .content {
    display: flex;
    flex-wrap: wrap;

    & > * {
      flex: 1;
      flex-basis: 50%;
    }
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

  & .squish {
    border: 1px dashed var(--color-line);
    padding: 0.25rem;
    border-radius: 0.2rem;
    margin-left: -0.25rem;

    padding-top: calc(0.5rem + 2px);

    @supports selector(:has(> *)) {
      padding-top: 0.25rem;
      transition: padding-top 0.1s ease-out;

      &:has(input:not(:placeholder-shown)) {
        padding-top: calc(0.5rem + 2px);
      }
    }
  }

  & > select {
    width: 18rem;
    font-family: var(--font-mono);
  }
`;

const AddObservationFormSection = () => {
  const { data: obs } = usePricesObsData();

  const optGroups = React.useMemo(() => 
    obs.sort((a, b) => a.store.localeCompare(b.store)).reduce((acc, obs) => {
      if (obs.address.includes('https://')) return acc;

      acc[obs.store] ||= {};
      acc[obs.store][obs.address] ||= 0;
      acc[obs.store][obs.address]++;

      return acc;
    }, {} as Record<string, Record<string, number>>),
    [obs]
  );

  return (
    <Container>
      <h2>Add observations</h2>
      <div className="content">
        <AddObservationForm>
          <FancyInput label="store" />
          <select name="store">
            {Object.entries(optGroups).map(([store, addresses]) => (
              <optgroup label={store} key={store}>
                {Object.entries(addresses).sort(([_a, a], [_b, b]) => b - a).map(([address, count]) => (
                  <option key={address} value={address}>
                    {`${address.slice(1, -1).padEnd(50, "\u1680")} ${count}`}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {/* 
            autofill 
            show suggestions for other most popular choices
          */}
          <FancyInput label="cfdb url" type="url" />
          <div className="squish">
            <FancyInput label="price" type="number" />
            <span>for</span>
            <FancyInput label="size" type="number" />
            <select name="weight-unit">
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
            </select>
          </div>
          <FancyInput label="date" type="date" />

          <button type="submit" formMethod='' >Add observation</button>
        </AddObservationForm>

        <div>
          hello
        </div>
      </div>
    </Container>
  );
};

export default AddObservationFormSection;
import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
};

const Container = styled.span`
  & b {
    font-weight: 400;

    &.b-0 { font-weight: 700; }
    &.b-1 { font-weight: 650; }
    &.b-2 { font-weight: 600; }
    &.b-3 { font-weight: 550; }
    &.b-4 { font-weight: 500; }
    &.b-5 { font-weight: 450; }
  }
`;

const SpeedText = ({ text }: Props): React.ReactElement => {
  return (
    <Container>
      {text.split(/\s+/).map((word, i) => {
        const wordLength = word.replaceAll(/[^\w]/gi, '').length;

        if (wordLength < 4) return (
          <React.Fragment key={i}>
            {`${word} `}
          </React.Fragment>
        );

        const firstLetterIndex = word.search(/\w/i);

        const preWord = word.substring(0, firstLetterIndex);
        const firstHalf = word.substring(firstLetterIndex, firstLetterIndex + wordLength / 2);
        const restOfWord = word.substring(firstLetterIndex + wordLength / 2);

        return (
          <>
            {preWord}
            {firstHalf.split('').map((letter, j) => <b key={`b-${j}`} className={`b-${j}`}>{letter}</b>)}
            {`${restOfWord} `}
          </>
        )
      })}
    </Container>
  );
};

export default memo(SpeedText);

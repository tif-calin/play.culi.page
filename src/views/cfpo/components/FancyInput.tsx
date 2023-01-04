import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 1rem;

  & :where(input, textarea) {
    & + label {
      position: absolute;
      padding: 0 0.15rem;
      left: 0.4rem;
      top: 0.5rem;
      color: var(--color-bg);
      z-index: 0;

      transition: 
        font-size 0.15s ease-in,
        color 0.15s ease-in,
        inset 0.15s ease-in
      ;

      &::before, 
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        z-index: -1;
        inset: 0;
      }

      &::before {
        height: 0.5rem;
        background: var(--color-fg);
        opacity: 0;
        transition-property: opacity;
        transition-duration: 0.15s;
        transition-timing-function: ease-in;
        transition-delay: 0.15s 0;
      }

      &::after {
        top: 0.5rem;
        background: var(--color-input);
      }
    }

    &:focus,
    &:not(:placeholder-shown) {
      & + label {
        font-size: 0.85rem;
        top: -0.5rem;

        &::before {
          opacity: 1;
        }
      }

      &:not(:valid) + label {
        color: var(--color-error);
      }
    }

    &:not(:placeholder-shown) {
      &:not(:focus):valid + label {
        color: var(--color-succes);
      }
    }
  }
`;

interface FancyInputProps {
  type?: 'text' | 'date' | 'url' | 'number' | 'textarea';
  label: string;
  required?: boolean;
};

const FancyInput = ({
  type = 'text',
  label,
  required = true,
}: FancyInputProps) => {
  const inputId = React.useId();

  return (
    <Container>
      {type === 'textarea' ? (
        <textarea 
          id={inputId}
          name={label}
          placeholder=" "
          required={required}
        />
      ) : (
        <input
          id={inputId} 
          name={label}
          type={type} 
          placeholder=" " 
          step="any"
          defaultValue={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
          required={required}
        />
      )}
      <label htmlFor={inputId}>{label}</label>
    </Container>
  );
};

export default FancyInput;

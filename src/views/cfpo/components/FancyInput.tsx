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
      left: 0.55rem;

      top: 0.5rem;
      color: var(--color-bg);
      transition: 
        font-size 0.15s ease-in,
        color 0.15s ease-in,
        inset 0.15s ease-in
      ;
    }

    &:not(:placeholder-shown) {
      & + label {
        font-size: 0.85rem;
        top: -0.55rem;
        background: linear-gradient(var(--color-fg) 0.55rem, var(--color-input) 0.55rem);
      }

      &:not(:focus):valid + label {
        color: var(--color-succes);
      }
    }

    &:not(:focus, :valid) + label {
      color: var(--color-error);
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
          defaultValue={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
          required={required}
        />
      )}
      <label htmlFor={inputId}>{label}</label>
    </Container>
  );
};

export default FancyInput;

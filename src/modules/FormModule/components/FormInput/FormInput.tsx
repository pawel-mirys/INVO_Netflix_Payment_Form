import React from 'react';
import './FromInput.scss';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
  minLength?: number;
  maxLength?: number;
}

export const FormInput = ({
  className,
  onChange,
  error,
  minLength,
  maxLength,
  ...props
}: FormInputProps) => {
  return (
    <div className={`form-input-container ${className}`}>
      <input
        className={`form-input-container__form-input`}
        onChange={onChange}
        name={props.name}
        type={props.type}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={props.placeholder}
      />
      {error && <p className='form-input-container__error-message'>{error}</p>}
    </div>
  );
};

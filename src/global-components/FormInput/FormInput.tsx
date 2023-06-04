import React from 'react';
import './FromInput.scss';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  className,
  onChange,
  ...props
}: FormInputProps) => {
  return (
    <input
      className={`input ${className}`}
      onChange={onChange}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

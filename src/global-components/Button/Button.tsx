import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  className,
  onClick,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

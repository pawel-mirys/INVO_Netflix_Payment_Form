import { Button } from '@/global-components/Button/Button';
import { FormInput } from '@/global-components/FormInput/FormInput';
import React, { useMemo, useState } from 'react';
import { BasicValidatorType, FormType } from '../../types/types';
import './PaymentForm.scss';

export const PaymentForm = () => {
  const [form, setForm] = useState<FormType>({
    fullName: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    cardNumber: {
      value: '',
      isValid: false,
    },
    expiryDate: {
      value: '',
      isValid: false,
    },
    CVV: {
      value: '',
      isValid: false,
    },
  });

  const basicValidator: BasicValidatorType = {
    fullName: (value: string) =>
      /([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/.test(
        String(value)
      ) || 'Full Name is incorrect',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(form);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const validator = basicValidator[name];
    let isValid = true;
    let errorMessage = '';

    if (validator) {
      const validatorValue = validator(value);
      if (typeof validatorValue === 'string') {
        isValid = !validatorValue;
        errorMessage = validatorValue;
      }
    }

    const isFormValid = useMemo(
      () => Object.values(form).every(({ isValid }) => isValid),
      [form]
    );

    setForm(
      (prevState) =>
        (prevState = {
          ...form,
          [name]: { ...form[name], value, isValid, errorMessage },
        })
    );
  };

  return (
    <form
      className='simple-form'
      onSubmit={handleSubmit}
      onChange={handleFormChange}>
      <FormInput type='text' name='fullName' placeholder='Name on card' />
      {form['fullName'].errorMessage && (
        <p className='simple-form_error-message'>
          {form['fullName'].errorMessage}
        </p>
      )}
      <FormInput type='text' name='cardNumber' placeholder='Card number' />
      <div className='simple-form__flex-container'>
        <FormInput
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
        />
        <FormInput type='text' name='CVV' placeholder='CVV' />
      </div>
      <Button type='submit' disabled={!isFormValid}>
        Next Step
      </Button>
    </form>
  );
};

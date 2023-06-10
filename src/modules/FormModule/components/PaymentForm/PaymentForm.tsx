import { Button } from '@/global-components/Button/Button';
import { FormInput } from '@/modules/FormModule/components/FormInput/FormInput';
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
      /([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ])([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ])/.test(
        String(value)
      ) || 'Full Name is incorrect',

    cardNumber: (value: string) =>
      /[0-9]{16,}/.test(String(value)) || 'Card number is incorrect',

    expiryDate: (value: string) =>
      /([0-9]{2,})([/]{1,})([0-9]{2,})/.test(String(value)) ||
      'Expiry date is incorrect',

    CVV: (value: string) =>
      /([0-9]{3,})/.test(String(value)) || 'CVV code is incorrect',
  };

  const isFormValid = useMemo(
    () => Object.values(form).every(({ isValid }) => isValid),
    [form]
  );

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

    setForm({
      ...form,
      [name]: { ...form[name], value, isValid, errorMessage },
    });
  };

  return (
    <form
      className='simple-form'
      onSubmit={handleSubmit}
      onChange={handleFormChange}>
      <FormInput
        type='text'
        name='fullName'
        placeholder='Name on card'
        error={form['fullName'].errorMessage}
        maxLength={25}
      />
      <FormInput
        type='text'
        name='cardNumber'
        placeholder='Card number'
        error={form['cardNumber'].errorMessage}
        maxLength={16}
        required
      />
      <div className='simple-form__flex-container'>
        <FormInput
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
          error={form['expiryDate'].errorMessage}
          maxLength={5}
          required
        />
        <FormInput
          type='text'
          name='CVV'
          placeholder='CVV'
          error={form['CVV'].errorMessage}
          maxLength={3}
          required
        />
      </div>
      <Button
        className='simple-form__submit-button'
        type='submit'
        disabled={!isFormValid}>
        Next Step
      </Button>
    </form>
  );
};

import { FormEventHandler, useState, useRef } from 'react';
import { Button, Input } from '@ems/common-ui';

import './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input label="First name: " ref={firstNameRef} />
      </div>
      <div>
        <Input label="Last name: " ref={lastNameRef} />
      </div>
      <div>
        <Input type="number" label="Age: " ref={ageRef} />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};

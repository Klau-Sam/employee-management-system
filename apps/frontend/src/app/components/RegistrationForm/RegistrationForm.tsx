import { FormEventHandler, useState, useRef } from 'react';
import { Button, Input } from '@ems/common-ui';

import './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [age, setAge] = useState<number>(() => {
    return parseInt(localStorage.getItem('userAge') || '', 10);
  });
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('userAge', `${age}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input label="First name: " ref={firstNameRef} />
        </div>
        <div>
          <Input label="Last name: " ref={lastNameRef} />
        </div>
        <div>
          <Input
            type="number"
            label="Age: "
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
          />
        </div>
        <Button type="submit" label="Send" />
      </form>
      <div>Current age: {age}</div>
    </div>
  );
};

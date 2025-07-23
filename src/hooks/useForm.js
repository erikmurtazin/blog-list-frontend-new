import { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');
  const type = 'text';
  const onChange = event => {
    setValue(event.target.value);
  };
  return { type, value, onChange };
};

export default useForm;

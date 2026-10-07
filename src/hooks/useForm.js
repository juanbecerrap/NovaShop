import { useState } from 'react';

export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allErrors = validate(values);
  const visibleErrors = Object.fromEntries(
    Object.entries(allErrors).filter(([name]) => submitted || touched[name]),
  );

  const getFieldProps = (name) => ({
    name,
    value: values[name],
    error: visibleErrors[name],
    onChange: (event) => setValues((current) => ({ ...current, [name]: event.target.value })),
    onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
  });

  const handleSubmit = (onValid) => (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(allErrors).length === 0) onValid(values);
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
  };

  return { values, getFieldProps, handleSubmit, reset };
}

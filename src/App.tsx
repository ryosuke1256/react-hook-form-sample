import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data:any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        firstName
        <input {...register('firstName')} /> {/* register an input */}
      </div>
      <div>
        lastName
        <input {...register('lastName', { required: true })} />
      </div>
      {errors.lastName && <p>Last name is required.</p>}
      <div>
        age
        <input {...register('age', { pattern: /\d+/ })} />
      </div>
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}

export default App;

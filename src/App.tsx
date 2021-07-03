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
    <form onSubmit={handleSubmit(onSubmit)} style={{padding:'30px'}}>
      <div>
        firstName
        <input {...register('firstName', { required: true})} />
      </div>
      {errors.firstName && <p>First name is required.</p>}
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
      <div>
        email
        <input type="text" placeholder="Email" {...register("Email", {required: true, min: -2, pattern: /^\S+@\S+$/i})} />
        {errors.Email && <p>The format of the email is incorrect.</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default App;

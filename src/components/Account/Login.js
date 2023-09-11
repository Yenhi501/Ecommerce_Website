import React, { useState } from 'react';
import FormErrors from './FormErrors';

const Login = () => {
  return (
    <form action="#">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email Address" />
      <span>
        <input type="checkbox" class="checkbox" />
        Keep me signed in
      </span>
      <button type="submit" class="btn btn-default">
        Login
      </button>
    </form>
  );
};

export default Login;

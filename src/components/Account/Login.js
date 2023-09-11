import React, { useState } from 'react';
import FormErrors from './FormErrors';

const Login = () => {
  const styleError = {
    color: 'red',
    marginLeft: '10px',
    marginTop: '-8px',
    fontSize: '12px',
  };
  const styleErrorCheck = {
    color: 'red',
    fontSize: '12px',
  };
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    check: '',
    level: 0,
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputs.name === '') {
      errorSubmit.name = 'Vui lòng nhập name !';
      flag = false;
    }
    if (inputs.email === '') {
      errorSubmit.email = 'Vui lòng nhập email !';
      flag = false;
    }
    if (inputs.name !== '' && inputs.email !=='' && inputs.check === '') {
      errorSubmit.check = 'Vui lòng nhập click vào ô Keep me signed in !';
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInput}
        value={inputs.name}
      />
      {errors.name && <p style={styleError}>{errors.name}</p>}
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={handleInput}
        value={inputs.email}
      />
      {errors.email && <p style={styleError}>{errors.email}</p>}
      <input name='level' type='text' value={inputs.level}/>
      <span>
        <input name="check" type="checkbox" className="checkbox"/>
        Keep me signed in
      </span>
      {errors.check && <p style={styleErrorCheck}>{errors.check}</p>}
      <button type="submit" className="btn btn-default">
        Login
      </button>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const styleError = {
    color: 'red',
    marginLeft: '10px',
    marginTop: '-8px',
    fontSize: '12px',
  };

  const [inputs, setInputs] = useState({
    password: '',
    email: '',
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

    if (inputs.password === '') {
      errorSubmit.password = 'Vui lòng nhập password !';
      flag = false;
    }
    if (inputs.email === '') {
      errorSubmit.email = 'Vui lòng nhập email !';
      flag = false;
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      if (flag) {
        const data = {
          email: inputs.email,
          password: inputs.password,
          level: 0,
        };

        axios
          .post('https://localhost/laravel8/laravel8/public/api/login', data)
          .then((res) => {
            console.log(res);
            let accessToken = JSON.stringify(res.data.token);
            console.log(res.data.Auth);
            console.log(res.data.token);
            let appState = JSON.stringify(res.data.Auth);
            localStorage.setItem('login', true);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('appState', appState);
            if (res.data.errors) {
              setErrors(res.data.errors);
            } else {
              localStorage.setItem('isLoggedIn', 'true');
              navigate('/');
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email Address" onChange={handleInput} value={inputs.email} />
      {errors.email && <p style={styleError}>{errors.email}</p>}
      <input name="password" type="text" placeholder="Password" onChange={handleInput} value={inputs.password} />
      {errors.password && <p style={styleError}>{errors.password}</p>}
      {/* <input name="level" type="text" value={inputs.level} /> */}
      <span>
        <input name="check" type="checkbox" className="checkbox" />
        Keep me signed in
      </span>
      {/* {errors.check && <p style={styleErrorCheck}>{errors.check}</p>} */}
      <button type="submit" className="btn btn-default">
        Login
      </button>
    </form>
  );
};

export default Login;

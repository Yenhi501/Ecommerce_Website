import React, { useState } from 'react';
import FormErrors from './FormErrors';

const Register = () => {
  const styleError = {
    color: 'red',
    marginLeft: '10px',
    marginTop: '-8px',
    fontSize: '12px',
  };
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    pass: '',
    phone: '',
    address: '',
    avatar: '',
    level: '',
  });
    const [errors, setErrors] = useState({
      avatar:''
  });

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));

    if (nameInput === 'avatar') {
      const file = e.target.files[0];
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'image/PNG',
        'image/JPG',
      ];
      const maxSize = 1 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: 'Loại tệp không hợp lệ. Vui lòng chọn ảnh JPEG hoặc PNG.',
        }));
      } else if (file.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar:
            'Kích thước tệp vượt quá giới hạn. Vui lòng chọn tệp nhỏ hơn 1MB.',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: '',
        }));
      }
    }
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
    if (inputs.pass === '') {
      errorSubmit.pass = 'Vui lòng nhập pass !';
      flag = false;
    }
    if (inputs.phone === '') {
      errorSubmit.phone = 'Vui lòng nhập phone !';
      flag = false;
    }
    if (inputs.address === '') {
      errorSubmit.address = 'Vui lòng nhập address !';
      flag = false;
    }
    if (inputs.avatar === '') {
      errorSubmit.avatar = 'Vui lòng chọn tệp !';
      flag = false;
    }
    if (inputs.level === '') {
      errorSubmit.level = 'Vui lòng nhập level !';
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
    }
  };
  return (
    <form action="#" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInput}
      />
      {errors.name && <p style={styleError}>{errors.name}</p>}
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleInput}
      />
      {errors.email && <p style={styleError}>{errors.email}</p>}
      <input
        name="pass"
        type="password"
        placeholder="Password"
        onChange={handleInput}
      />
      {errors.pass && <p style={styleError}>{errors.pass}</p>}
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        onChange={handleInput}
      />
      {errors.phone && <p style={styleError}>{errors.phone}</p>}
      <input
        name="address"
        type="text"
        placeholder="Address"
        onChange={handleInput}
      />
      {errors.address && <p style={styleError}>{errors.address}</p>}
      <input name="avatar" type="file" onChange={handleInput} />
      {errors.avatar && <p style={styleError}>{errors.avatar}</p>}
      <input
        name="level"
        type="text"
        placeholder="Level with Admin (1) and User (0)"
        onChange={handleInput}
      />
      {errors.level && <p style={styleError}>{errors.level}</p>}
      {/* <FormErrors errors={errors} /> */}
      <button type="submit" class="btn btn-default">
        Signup
      </button>
    </form>
  );
};

export default Register;

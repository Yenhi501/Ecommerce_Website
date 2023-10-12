import React, { useState } from 'react';
// import FormErrors from './FormErrors';
import axios from 'axios';

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
    password: '',
    phone: '',
    address: '',
    avatar: '',
    level: 0,
  });
  const [errors, setErrors] = useState({
    avatar: '',
  });

  const [avatar, setAvatar] = useState('');
  const [file, setFile] = useState(null);

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  function handleUserInputFile(e) {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/PNG', 'image/JPG'];
    const maxSize = 1 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        avatar: 'Loại tệp không hợp lệ. Vui lòng chọn ảnh JPEG hoặc PNG.',
      }));
    } else if (file.size > maxSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        avatar: 'Kích thước tệp vượt quá giới hạn. Vui lòng chọn tệp nhỏ hơn 1MB.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, avatar: '' }));

      let reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setFile(file);
        setInputs((prevInputs) => ({
          ...prevInputs,
          avatar: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  const sendDataToAPI = async () => {
    try {
      const response = await axios.post('https://localhost/laravel8/laravel8/public/api/register', inputs);
      console.log(inputs);
      // console.log('API Response:', response.data);
      if (response.data.errors) {
        alert('error');
        setErrors(response.data.errors);
      } else {
        alert('Đăng ký thành công');
      }
    } catch (error) {
      console.error('Error sending data to API:', error);
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
    if (inputs.password === '') {
      errorSubmit.password = 'Vui lòng nhập pass !';
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
      sendDataToAPI();
    }
  };

  return (
    <form action="#" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" onChange={handleInput} value={inputs.name} />
      {errors.name && <p style={styleError}>{errors.name}</p>}
      <input name="email" type="email" placeholder="Email" onChange={handleInput} value={inputs.email} />
      {errors.email && <p style={styleError}>{errors.email}</p>}
      <input name="password" type="password" placeholder="Password" onChange={handleInput} value={inputs.password} />
      {errors.password && <p style={styleError}>{errors.password}</p>}
      <input name="phone" type="text" placeholder="Phone" onChange={handleInput} value={inputs.phone} />
      {errors.phone && <p style={styleError}>{errors.phone}</p>}
      <input name="address" type="text" placeholder="Address" onChange={handleInput} value={inputs.address} />
      {errors.address && <p style={styleError}>{errors.address}</p>}
      <input name="avatar" type="file" onChange={handleUserInputFile} />
      {errors.avatar && <p style={styleError}>{errors.avatar}</p>}
      <input name="level" type="text" placeholder="Level with Admin (1) and User (0)" onChange={handleInput} value={inputs.level} />
      {errors.level && <p style={styleError}>{errors.level}</p>}
      {/* <FormErrors errors={errors} /> */}
      <button type="submit" className="btn btn-default">
        Signup
      </button>
    </form>
  );
};

export default Register;

import React, { useRef, useState } from "react";
import FormErrors from "./FormErrors";
// import $ from "jquery";
const arrs = [
  {
    id: "",
    name: "Vui lòng chọn",
  },
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];

const B32 = () => {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    avatar: "",
    sex: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    avatar: "",
  });

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));

    if (nameInput === "email") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Vui lòng nhập email!",
        }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email không hợp lệ. Vui lòng nhập một địa chỉ email hợp lệ.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
    if (nameInput === "avatar") {
      const file = e.target.files[0];
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/PNG",
        "image/JPG",
      ];
      const maxSize = 1 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: "Loại tệp không hợp lệ. Vui lòng chọn ảnh JPEG hoặc PNG.",
        }));
      } else if (file.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar:
            "Kích thước tệp vượt quá giới hạn. Vui lòng chọn tệp nhỏ hơn 1MB.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: "",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorSubmit = {};
    let flag = true;

    if (inputs.email === "") {
      errorSubmit.email = "Vui lòng nhập email !";
      flag = false;
      emailRef.current.focus();
    }
    if (inputs.pass === "") {
      errorSubmit.pass = "Vui lòng nhập pass !";
      flag = false;
      passwordRef.current.focus();
    }
    if (inputs.avatar === "") {
      errorSubmit.avatar = "Vui lòng chọn tệp !";
      flag = false;
    }
    if (inputs.sex === "") {
      errorSubmit.sex = "Vui lòng chọn giới tính !";
      flag = false;
    }
    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
    }

    localStorage.setItem("userEmail", inputs.email);
    localStorage.setItem("userPassword", inputs.pass);
  };
  return (
    <div className="forms">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <p className="forms__title">Regiser</p>
        <div className="forms__content">
          <div className="forms__content--input">
            <input
              ref={emailRef}
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleInput}
            />
            {/* {errors.email && (
              <p className="forms__content--err">{errors.email}</p>
            )} */}
            <br />
            <input
              ref={passwordRef}
              name="pass"
              type="text"
              placeholder="Password"
              onChange={handleInput}
            />
            <br />
            <input name="avatar" type="file" onChange={handleInput} />

            <br />
            <select
              value={inputs.sex}
              className="forms__content--select"
              name="sex"
              onChange={handleInput}
            >
              {arrs.map((arr) => (
                <option key={arr.id} value={arr.id}>
                  {arr.name}
                </option>
              ))}
            </select>
            <FormErrors errors={errors} />
          </div>
          <button className="forms__content--but" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default B32;

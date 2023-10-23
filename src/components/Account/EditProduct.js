import React from 'react';

const EditProduct = () => {
  return (
    <div className="col-sm-9">
      <div className="signup-form form_wrapper">
        <div className="title_container">
          <h2>User Update</h2>
        </div>
        <form action="#" encType="multipart/form-data">
          <input type="text" placeholder="Name" name="name" />

          <input readOnly type="text" placeholder="Email" name="email" />

          <input type="password" placeholder="Password" name="password" />

          <input type="text" placeholder="Number phone" name="phone" />

          <input type="text" placeholder="Address" name="address" />

          <input type="file" name="avatar" />

          <button type="submit" className="btn btn-default">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

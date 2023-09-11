import React from 'react';
import Register from './Register';
import Login from './Login';

const Account = () => {
  return (
    <div>
      <section id="form">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              {/* col-sm-offset-1 */}
              <div class="login-form">
                <h2>Login to your account</h2>
                <Login />
              </div>
            </div>
            <div class="col-sm-1">
              <h2 class="or">OR</h2>
            </div>
            <div class="col-sm-4">
              <div class="signup-form">
                <h2>New User Signup!</h2>
                <Register />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;

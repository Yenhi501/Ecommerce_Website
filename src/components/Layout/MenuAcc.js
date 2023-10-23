import React from 'react';
import { Link } from 'react-router-dom';

const MenuAcc = () => {
  return (
    <div class="col-sm-3">
      <div class="left-sidebar">
        <h2>Category</h2>
        <div class="panel-group category-products" id="accordian">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                  <span class="badge pull-right">
                    <i class="fa fa-plus"></i>
                  </span>
                  <Link to={'/account/update'}>Account</Link>
                </a>
              </h4>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                  <span class="badge pull-right">
                    <i class="fa fa-plus"></i>
                  </span>

                  <Link to={'/account/product/add'}> My Product</Link>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAcc;

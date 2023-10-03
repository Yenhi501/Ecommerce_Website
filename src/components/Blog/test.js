import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ListComment = (props) => {
  const { cmt } = props;

  return (
    <div>
      <div className="response-area">
        <h2>3 RESPONSES</h2>
        <ul className="media-list">
          {cmt &&
            cmt.map((item) => (
              <li className="media" key={item.id}>
                <a className="pull-left" href="#">
                  <img
                    className="media-object"
                    src={
                      'https://localhost/laravel8/laravel8/public/upload/user/avatar/' +
                      item.image_user
                    }
                    alt={item.name_user}
                  />
                </a>
                <div className="media-body">
                  <ul className="sinlge-post-meta">
                    <li>
                      <i className="fa fa-user"></i>
                      {item.name_user}
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i>
                      {item.created_at}
                    </li>
                    <li>
                      <i className="fa fa-calendar"></i> DEC 5, 2013
                    </li>
                  </ul>
                  <div>
                    <p>{item.comment}</p>
                  </div>
                  <a className="btn btn-primary" href="">
                    <i className="fa fa-reply"></i>Replay
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComment;

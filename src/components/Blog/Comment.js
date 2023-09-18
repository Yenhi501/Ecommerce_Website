import React from 'react';
import Rate from './Rate';
import social from './img/socials.png';
import ListComment from './ListComment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { error } from 'jquery';
import axios from 'axios';

const Comment = (props) => {
  let params = useParams();

  const [data, setData] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comment, setComment] = useState([]);

  const handleCheckLogin = () => {
    let access = localStorage.getItem('accessToken');
    let accessToken = JSON.parse(access);
    console.log(accessToken);

    const userData = JSON.parse(localStorage.getItem('appState'));

    let url =
      'https://localhost/laravel8/laravel8/public/api/blog/comment/' +
      props.idBlog;
    console.log(userData);

    let config = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };

    if (!userData) {
      console.log('Vui lòng đăng nhập trước khi đăng bình luận.');
    } else if (!newComment) {
      alert('Vui lòng nhập bình luận');
    } else {
      const formData = new FormData();
      formData.append('id_blog', props.idBlog);
      formData.append('id_user', userData.id);
      formData.append('id_comment', 0);
      formData.append('comment', newComment);
      formData.append('image_user', userData.avatar);
      formData.append('name_user', userData.name);

      axios
        .post(url, formData, config)
        .then((response) => {
          console.log(response);
          setComment([...comment, response.data]);
          setNewComment('');
        })
        .catch((error) => {
          console.error('Error posting comment:', error);
        });
    }
  };
  return (
    <div>
      <li class="media">
        <a class="pull-left" href="#">
          <img class="media-object" src="./img/man-two.jpg" alt="" />
        </a>
        <div class="media-body">
          <ul class="sinlge-post-meta">
            <li>
              <i class="fa fa-user"></i>Janis Gallagher
            </li>
            <li>
              <i class="fa fa-clock-o"></i> 1:33 pm
            </li>
            <li>
              <i class="fa fa-calendar"></i> DEC 5, 2013
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a class="btn btn-primary" href="">
            <i class="fa fa-reply"></i>Replay
          </a>
        </div>
      </li>

      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>

            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea
                name="message"
                rows="11"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)} // Update the newComment state
              ></textarea>
              <button
                onClick={handleCheckLogin}
                className="btn btn-primary"
                href=""
              >
                post comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

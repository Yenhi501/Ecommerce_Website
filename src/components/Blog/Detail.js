import React from 'react';
import Rate from './Rate';
import social from './img/socials.png';
import ListComment from './ListComment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { error } from 'jquery';
import axios from 'axios';
const Detail = (props) => {
  let params = useParams();

  const [data, setData] = useState('');
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
    } else if (!comment) {
      alert('Vui lòng nhập bình luận');
    } else {
      const formData = new FormData();
      formData.append('id_blog', props.idBlog);
      formData.append('id_user', userData.id);
      formData.append('id_comment', 0);
      formData.append('comment', comment);
      formData.append('image_user', userData.avatar);
      formData.append('name_user', userData.name);
      // console.log(userData.name);

      axios.post(url, formData, config).then((response) => {
        console.log(response);
      });
    }
  };
  useEffect(() => {
    axios
      .get(
        'https://localhost/laravel8/laravel8/public/api/blog/detail/' +
          params.id,
        // console.log(params.id),
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setComment(res.data.data.comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>Girls Pink T Shirt arrived in store</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"></i> Mac Doe
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i className="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
          </div>
          <a href="/">
            <img
              src={
                'https://localhost/laravel8/laravel8/public/upload/Blog/image/' +
                data.image
              }
              alt=""
            />
          </a>

          <p>{data.content}</p>
          <br />

          <div className="pager-area">
            <ul className="pager pull-right">
              <li>
                <a href="#">Pre</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Rate />

      <div className="socials-share">
        <a href="#">
          <img src={social} alt="" />
        </a>
      </div>

      <ListComment />
    </div>
  );
};

export default Detail;
